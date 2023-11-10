import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName: String,
    price: {
        type: Number,
        min: 0
    },
    amount: {
        type: Number,
        min: 0
    },
    productImage: String,
    categories: {
        type: String,
    }
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);
export default Product;
