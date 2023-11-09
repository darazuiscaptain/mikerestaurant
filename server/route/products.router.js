import express from "express";
const router = express.Router()

import { addProduct, getProducts, updateProduct } from "../controller/products.controller.js"



router.post("/add-product", addProduct)
router.get("/", getProducts)
router.put("/update/:id", updateProduct)



export default router;