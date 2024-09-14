import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }, product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }, quantity: {
        type: Number,
        required: true
    }, price: {
        type: Number,
        required: true
    }, totalPrice: {
        type: Number
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
})

OrderItemSchema.pre('save', function (next) {
    this.totalPrice = this.price * this.quantity;
    next();
});

export default mongoose.model('OrderItem', OrderItemSchema);