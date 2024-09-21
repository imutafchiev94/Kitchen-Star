import { Schema, model } from "mongoose";
import { IPayment } from "../interfaces/paymentInterface";

const PaymentSchema = new Schema<IPayment>({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }, paymentMethod: {
        type: String,
        enum: ['credit card', 'PayPal', 'Cash on delivery'],
        default: 'credit card'
    }, paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    }, transactionId: {
        type: String, 
        required: true,
        unique: true
    }, amount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

export default model('Payment', PaymentSchema);