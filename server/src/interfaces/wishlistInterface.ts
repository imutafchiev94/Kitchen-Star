import { Schema } from "mongoose";


export interface IWishlist {
    _id?: string,
    user: Schema.Types.ObjectId | string,
    items: Schema.Types.ObjectId[] | string[],
    createdAt: Date, 
    updatedAt?: Date,
}