import { Schema, model } from "mongoose";
import { IAddress } from "../interfaces/addressInterface";

const AddressSchema = new Schema<IAddress>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, addressLine1: {
        type: String,
        required: true
    }, addressLine2: {
        type: String
    }, city: {
        type: String,
        required: true
    }, state: {
        type: String,
        required: true
    }, zipCode: {
        type: String,
        required: true
    }, country: {
        type: String,
        required: true
    }, type: {
        type: String,
        enum: ['shipping', 'billing'],
        default: 'billing'
    }
}, {
    timestamps: true
});


export default model('Address', AddressSchema);