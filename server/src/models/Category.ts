import { Schema, model } from "mongoose";
import { ICategory } from "../interfaces/categoryInterface";

const CategorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        unique: true
    }, description: {
        type: String,
        required: true
    }, parentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

export default model('Category', CategorySchema);