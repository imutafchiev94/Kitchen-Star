import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';
import Role from '../models/Role';
import User from '../models/User';
import { IRole } from '../interfaces/roleInterface';

 

const register = async (data: IUser) => {
    let salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS as string));

    let hash = await bcrypt.hash(data.password, salt);

    let role: IRole | null = await Role.findOne({ title: 'Customer' });

    if(!role) {
        throw new Error('Role not found!');
    }

    let user = await User.findOne({
        $or: [{ username: data.username }, { email: data.email }],
    }).exec();

    if(!user) {
        let userData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            password: hash,
            avatar: data.avatar,
            phoneNumber: data.phoneNumber,
            role: role._id,
            address: null,
            createdAt: new Date(Date.now()).toUTCString()
        }

        user = await new User(userData);

        return await user.save();
    } else {
        throw new Error("User with this email or username already exists");
    }
}

const login = async (username: string, password: string) : Promise<string> => {
    let user: (IUser & {role: IRole}) | null = await User.findOne({username}).populate('role').lean();

    if(!user) {
        throw new Error('Wrong credentials, please try again!');
    }

    let isPasswordMatch = await bcrypt.compare(password, user.password);

    if(!isPasswordMatch) {
        throw new Error('Wrong credentials, please try again!');
    }

    let token = jwt.sign(
        { _id: user._id, username: user.username, role: user.role.title },
        process.env.USER_SESSION_SECRET as string,
        {expiresIn: '1h'}
      );
    
      return token;
}

export default {
    register,
    login
}