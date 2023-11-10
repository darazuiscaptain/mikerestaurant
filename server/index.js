import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import mongoose from "mongoose";


import userRouter from "./route/users.router.js";
import authRouter from "./route/auth.router.js";
import productRouter from "./route/products.router.js";
import orderRouter from "./route/orders.router.js"


import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Mike_Restaurant/Food',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.originalname,
    },
});
const parser = multer({ storage: storage })


//Initialize Express
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1 style='align-center'>Welcome to Ethio-tour Backing</h1>")
})


//Routes
app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/orders", orderRouter)
app.use("/products", parser.single("image"), productRouter)

app.use("*", (req, res) => {
    res.json("Page not found")
})

// Error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        // Handle Mongoose validation errors
        const errors = Object.keys(err.errors).map(field => ({
            field,
            message: err.errors[field].message
        }));
        return res.status(400).json({ errors });
    }
    // Handle other errors
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

//Mongo DB Connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const PORT = process.env.PORT || 5000

        app.listen(PORT, () => {
            console.log(`Server start on http://localhost:${PORT}`);
        })
    })
    .catch((err) => {
        console.log("DB ERROR: ", err)
    })