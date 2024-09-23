import { Schema } from "mongoose";

export interface IRole {
    _id?: string,
    title: string,
    description: string,
    users?: Schema.Types.ObjectId[] | string[]
    createdAt: Date, 
    updatedAt?: Date,
}