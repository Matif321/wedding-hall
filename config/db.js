// 

import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connection has connected successfully");

    } catch (error) {
        console.error("MongoDB connection error:", error);

        process.exit(1); // 🔥 very important (stop app if DB fails)
    }
};

export default dbConnection;