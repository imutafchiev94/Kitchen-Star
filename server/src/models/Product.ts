import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/productInterface";

const ProductSchema = new Schema<IProduct>({
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
        type: Schema.Types.ObjectId,
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
    }
}, {
    timestamps: true
});

ProductSchema.pre('save', function(next) {
    let randomNumber = Math.floor(Math.random() * 1000000000);
    let timestamp = this.createdAt.getTime();
    this.SKU = `${randomNumber}${timestamp}`
    next();
})

export default model('Product', ProductSchema);