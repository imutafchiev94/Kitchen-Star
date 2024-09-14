import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
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
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Payment', PaymentSchema);