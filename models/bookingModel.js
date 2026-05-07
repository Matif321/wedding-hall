import mongoose from "mongoose";

const bokingShecma = new mongoose.Schema({

    ClientName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    },

    // this about evetnt detial

    evenType: {
        type: String,
        required: true
    },
    eventDate: {
        type: Strring,
        required: true
    },
    startTime: {
        type: String,
        reqiored: true
    },
    endtime: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true

    }











}, { timestamps: true })


