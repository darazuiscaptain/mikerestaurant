import express from "express"
import { createOrder, getOrders, getOrder, updateOrder } from "../controller/orders.controller.js"

const router = express.Router()


router.post("/create-order", createOrder)
router.get("/", getOrders)
router.get("/:id", getOrder)
router.put("/edit/:id", updateOrder)



export default router