import { Schema } from "mongoose";


export interface ICategory {
    name: string,
    description: string,
    parentCategory?: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt: Date,
}