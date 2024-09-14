import mongoose from "mongoose";

const ShippingSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }, trackingNumber: {
        type: String,
        required: true,
        unique: true
    }, carrier: {
        type: String,
        required: true
    }, status: {
        type: String,
        enum: ['Order placed', 'Order confirmed', 'Order processing', 'Out for delivery', 'Delivered'],
        default: 'Order placed'
    }, shippingDate: {
        type: Date,
        required: true
    }, estimateDeliveryDate: {
        type: Date,
        required: true
    }, actualDeliveryDate: {
        type: Date,
        required: true,
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Shipping', ShippingSchema);