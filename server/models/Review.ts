import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }, rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }, review: {
        type: String,
        maxLength: [500, "Your review is too long. Please limit your review to 500 characters."]
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Review', ReviewSchema);