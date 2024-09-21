import { Schema } from "mongoose";


export interface IOrder {
    user: Schema.Types.ObjectId | string, 
    orderNumber: string,
    totalAmount: number,
    status: string,
    paymentStatus: string,
    shippingAddress?: Schema.Types.ObjectId | string,
    billingAddress?: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt: Date,
}