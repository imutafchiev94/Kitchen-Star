import { Schema, model } from "mongoose";
import { IShipping } from "../interfaces/shippingInterface";

const ShippingSchema = new Schema<IShipping>({
    order: {
        type: Schema.Types.ObjectId,
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
    }
}, {
    timestamps: true
});

export default model('Shipping', ShippingSchema);