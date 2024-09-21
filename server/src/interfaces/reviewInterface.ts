import { Schema } from "mongoose";


export interface IReview {
    user: Schema.Types.ObjectId | string, 
    product: Schema.Types.ObjectId | string, 
    rating: number,
    review: string,
    createdAt: Date, 
    updatedAt: Date,
}