import { Schema, model } from "mongoose";
import { IReview } from "../interfaces/reviewInterface";

const ReviewSchema = new Schema<IReview>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }, rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }, review: {
        type: String,
        maxLength: [500, "Your review is too long. Please limit your review to 500 characters."]
    }
}, {
    timestamps: true
});

export default model('Review', ReviewSchema);