import { Schema } from "mongoose";


export interface IShipping {
    order: Schema.Types.ObjectId | string,
    trackingNumber: string,
    carrier: string,
    status: string,
    shippingDate: Date,
    estimateDeliveryDate: Date,
    actualDeliveryDate: Date,
    createdAt: Date, 
    updatedAt: Date,
}