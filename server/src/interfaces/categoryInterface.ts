import { Schema } from "mongoose";


export interface ICategory {
    _id?: string,
    name: string,
    description: string,
    parentCategory?: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt?: Date,
}