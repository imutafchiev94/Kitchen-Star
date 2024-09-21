import { Schema } from "mongoose";

export interface IRole {
    title: string,
    description: string,
    users: Schema.Types.ObjectId[] | string[]
    createdAt: Date, 
    updatedAt: Date,
}