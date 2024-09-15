import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    }, description: {
        type: String,
        required: true
    }, discountAmount: {
        type: Number,
        required: true
    }, discountType: {
        type: String,
        enum: ['percentage', 'fixed amount'],
        default: 'percentage'
    }, expirationDate: {
        type: Date,
        required: true
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Coupon', CouponSchema);