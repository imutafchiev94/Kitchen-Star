import { Schema, model } from "mongoose";
import { IRole } from "../interfaces/roleInterface";

const RoleSchema = new Schema<IRole>({
    title: {
        type: String,
        required: true,
        unique: true,
    }, description: {
        type: String,
        required: true,
        maxlength: 100,
    }, users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

export default model('Role', RoleSchema);