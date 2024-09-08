import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    }, lastName: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
        unique: true,
    }, username: {
        type: String,
        required: true,
        unique: true,
    }, password: {
        type: String,
        required: true,
    }, phoneNumber: {
        type: String,
    }, role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }, address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
})

export default mongoose.model('User', UserSchema);