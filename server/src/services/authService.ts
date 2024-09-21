import 'dotenv/config';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/userInterface';
import Role from '../models/Role';
import User from '../models/User';

 

const register = async (data: IUser) => {
    let salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS as string));

    let hash = await bcrypt.hash(data.password, salt);

    let role = await Role.findOne({ title: 'customer' });

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
            role: role,
            address: null,
            createdAt: new Date(Date.now()).toUTCString()
        }

        user = await new User(userData);

        return await user.save();
    } else {
        throw new Error("User with this email or username already exists");
    }
}

export default {
    register
}