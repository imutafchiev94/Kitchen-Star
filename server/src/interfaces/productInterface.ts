import { Schema } from "mongoose";


export interface IProduct {
    _id?: string,
    name: string,
    description: string,
    price: number,
    productCategory: Schema.Types.ObjectId | string,
    stockQuantity: number,
    images: string[],
    SKU: string,
    createdAt: Date, 
    updatedAt?: Date,
}