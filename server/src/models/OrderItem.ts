import { Schema, model } from "mongoose";
import { IOrderItem } from "../interfaces/orderItemInterface";

const OrderItemSchema = new Schema<IOrderItem>({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }, product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }, quantity: {
        type: Number,
        required: true
    }, price: {
        type: Number,
        required: true
    }, totalPrice: {
        type: Number
    }
}, {
    timestamps: true
});

OrderItemSchema.pre('save', function (next) {
    this.totalPrice = this.price * this.quantity;
    next();
});

export default model('OrderItem', OrderItemSchema);