import { Schema } from "mongoose";


export interface IWishlist {
    user: Schema.Types.ObjectId | string,
    items: Schema.Types.ObjectId[] | string[],
    createdAt: Date, 
    updatedAt: Date,
}