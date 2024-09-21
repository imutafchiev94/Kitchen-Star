import {Schema, model } from "mongoose";
import { IUser } from "../interfaces/userInterface";

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    }, lastName: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
        unique: true,
    }, username: {
        type: String,
        required: true,
        unique: true,
    }, password: {
        type: String,
        required: true,
    }, avatar: {
        type: String,
        default: 'https://res.cloudinary.com/kitchen-star/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1725801791/Avatars/user-avatar-1-icon-511x512-ynet6qk9_kylvrd.png'
    }, phoneNumber: {
        type: String,
    }, role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }, address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
}, {
    timestamps: true
});

export default model('User', UserSchema);