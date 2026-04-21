

import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signUp = async (req, res) => {
    try {
        const { fullName, userName, email, password, role, hall } = req.body;

        if (!fullName || !userName || !email || !password || !role || !hall) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullName,
            userName,
            email,
            password: hashedPassword,
            role,
            hall
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};