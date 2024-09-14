import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Address', AddressSchema);