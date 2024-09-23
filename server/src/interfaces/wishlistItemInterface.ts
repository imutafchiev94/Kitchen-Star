import { Schema } from "mongoose";


export interface IWishlistItem {
    _id?: string,
    wishlist: Schema.Types.ObjectId | string,
    product: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt?: Date,
}