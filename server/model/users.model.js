import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true 
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "https://th.bing.com/th/id/R.35e9fa8f7bc165d97c83c93335fa041d?rik=6gZ%2brqHn%2fbWTJQ&pid=ImgRaw&r=0"
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;
