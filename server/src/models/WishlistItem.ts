import { Schema, model } from "mongoose";
import { IWishlistItem } from "../interfaces/wishlistItemInterface";

const WishlistItemSchema = new Schema<IWishlistItem>({
    wishlist: {
        type: Schema.Types.ObjectId,
        ref: 'Whishlist'
    }, product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
});

export default model('WishlistItem', WishlistItemSchema);