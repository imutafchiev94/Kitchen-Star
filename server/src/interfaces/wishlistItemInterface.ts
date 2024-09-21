import { Schema } from "mongoose";


export interface IWishlistItem {
    wishlist: Schema.Types.ObjectId | string,
    product: Schema.Types.ObjectId | string,
    createdAt: Date, 
    updatedAt: Date,
}