import { Schema } from "mongoose";

export interface IAddress {
    user: Schema.Types.ObjectId | string, 
    addressLine1: string, 
    addressLine2?: string, 
    city: string, 
    state: string, 
    zipCode: string, 
    country: string, 
    type: string,
    createdAt: Date, 
    updatedAt: Date,
}