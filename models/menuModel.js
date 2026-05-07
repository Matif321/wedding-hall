import mongoose from "mongoose";

const menuShema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })
