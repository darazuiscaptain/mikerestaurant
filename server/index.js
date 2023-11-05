import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import mongoose from "mongoose";
import userRouter from "./route/users.router.js";
import authRouter from "./route/auth.router.js";

//Initialize Express
const app = express()
app.use(cors())
app.use(cookieParser())

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1 style='align-center'>Welcome to Ethio-tour Backing</h1>")
})

//Routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/auth", authRouter)

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
mongoose.connect(
    process.env.NODE_ENV === "production" ? process.env.MONGO_URI : process.env.MONGO_LOCAL_DB_URL
)
    .then(() => {
        const PORT = process.env.PORT || 5000

        app.listen(PORT, () => {
            console.log(`Server start on http://localhost:${PORT}`);
            console.log("DB run on", process.env.NODE_ENV === "production" ? "Cloud (Atlas MongoDB" : "Local MongoDB")
        })
    })
    .catch((err) => {
        console.log("DB ERROR: ", err)
    })