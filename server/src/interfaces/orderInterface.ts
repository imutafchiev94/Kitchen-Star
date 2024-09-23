import { Schema } from "mongoose";


export interface IOrder {
    _id?: string,
    user: Schema.Types.ObjectId | string, 
    orderNumber: string,
    totalAmount: number,
    status: string,
    paymentStatus: string,
    shippingAddress?: Schema.Types.ObjectId | string,
    billingAddress?: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt?: Date,
}