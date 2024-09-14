import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }, billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Order', OrderSchema);