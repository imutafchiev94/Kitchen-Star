import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, description: {
        type: String,
        required: true
    }, parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Category', CategorySchema);