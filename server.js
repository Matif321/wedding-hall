// 
import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
import userRoute from "./routers/userRouter.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRoute)


const port = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// DB Connection
dbConnection();

// Server start
app.listen(port, ("0.0.0.0"), () => {
    console.log(`Server is running on port ${port}`);
});