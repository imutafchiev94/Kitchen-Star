import { Schema, model } from "mongoose";
import { ICoupon } from "../interfaces/couponInterface";

const CouponSchema = new Schema<ICoupon>({
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
        required: true,
        enum: ['percentage', 'fixed amount'],
        default: 'percentage'
    }, expirationDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

export default model('Coupon', CouponSchema);