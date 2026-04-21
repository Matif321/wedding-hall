import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({

    hallName: {
        type: String,
        required: true
    },

    hallLogo: {
        type: String,
        required: true
    },

    location: String,

    capacity: Number,

    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }

}, { timestamps: true });

export default mongoose.model("Hall", hallSchema);