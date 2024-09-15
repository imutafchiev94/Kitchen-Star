import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    }, description: {
        type: String,
        required: true,
        maxlength: 100,
    },  createdAt: {
        type: Date,
        required: true,
        default: new Date(Date.now()).toUTCString()
    }, updatedAt: {
        type: Date,
    }
});

export default mongoose.model('Role', RoleSchema);