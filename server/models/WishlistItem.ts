import mongoose from "mongoose";

const WishlistItemSchema = new mongoose.Schema({
    wishlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Whishlist'
    }, product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }, createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
})

export default mongoose.model('WishlistItem', WishlistItemSchema);