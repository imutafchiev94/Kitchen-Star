import { Schema, model } from "mongoose";
import { IOrder } from "../interfaces/orderInterface";

const OrderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, orderNumber: {
        type: String,
        unique: true,
        required: true
    }, totalAmount: {
        type: Number,
        required: true
    }, status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    }, paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    }, shippingAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }, billingAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
}, {
    timestamps: true
});

export default model('Order', OrderSchema);