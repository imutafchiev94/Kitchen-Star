import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WhishlistItem'  
    }], createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date
    }
});

export default mongoose.model('Wishlist', WishlistSchema);