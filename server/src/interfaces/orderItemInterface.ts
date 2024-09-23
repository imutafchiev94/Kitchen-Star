import { Schema } from "mongoose";


export interface IOrderItem {
    _id?: string,
    order: Schema.Types.ObjectId | string,
    product: Schema.Types.ObjectId | string,
    quantity: number,
    price: number,
    totalPrice: number
    createdAt: Date, 
    updatedAt?: Date,
}