import { Schema } from "mongoose";


export interface IReview {
    _id?: string,
    user: Schema.Types.ObjectId | string, 
    product: Schema.Types.ObjectId | string, 
    rating: number,
    review: string,
    createdAt: Date, 
    updatedAt?: Date,
}