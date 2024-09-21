import { Schema, model } from "mongoose";
import { IWishlist } from "../interfaces/wishlistInterface";

const WishlistSchema = new Schema<IWishlist>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, items: [{
        type: Schema.Types.ObjectId,
        ref: 'WhishlistItem'  
    }]
}, {
    timestamps: true
});

export default model('Wishlist', WishlistSchema);