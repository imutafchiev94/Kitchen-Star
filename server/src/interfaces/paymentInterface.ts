import { Schema } from "mongoose";


export interface IPayment {
    _id?: string,
    order: Schema.Types.ObjectId | string,
    paymentMethod: string,
    paymentStatus: string,
    transactionId: string,
    amount: number,
    createdAt: Date, 
    updatedAt?: Date,
}