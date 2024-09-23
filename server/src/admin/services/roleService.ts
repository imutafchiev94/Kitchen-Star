import { IRole } from "../../interfaces/roleInterface"
import Role from "../../models/Role"

let createRole = async (roleBase: IRole) => {
    let role = await Role.findOne({ title: roleBase.title }).exec();

    if(!role) {
        let roleData : IRole = {
            title: roleBase.title,
            description: roleBase.description,
            users: [],
            createdAt: new Date(),
        };

        role = await new Role(roleData);
        return await role.save();
    } else {
        throw new Error('Role with this title already exists!');
    }
}

export default {
    createRole
}