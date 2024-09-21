import { Schema } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    username: string, 
    password: string, 
    avatar?: string,
    phoneNumber?: string, 
    role: Schema.Types.ObjectId | string, 
    address: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt: Date,
}