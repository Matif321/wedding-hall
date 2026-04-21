
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["superAdmin", "admin", "staff"],
        default: "admin"
    },

    hall: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hall"
    }

}, { timestamps: true });

export default mongoose.model("User", userSchema);






