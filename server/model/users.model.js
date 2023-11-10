import mongoose from "mongoose";
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "https://th.bing.com/th/id/R.35e9fa8f7bc165d97c83c93335fa041d?rik=6gZ%2brqHn%2fbWTJQ&pid=ImgRaw&r=0"
    },
    role: {
        type: String,
        default: "customer"
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;
