import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }, address: {
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

export default mongoose.model('User', UserSchema);