import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true,
    }, price: {
        type: Number,
        required: true,
    }, productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }, stockQuantity: {
        type: Number,
        required: true,
        default: 5
    }, images: [{
        type: String
    }], SKU: {
        type: String,
        unique: true,
        required: true
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Product', ProductSchema);