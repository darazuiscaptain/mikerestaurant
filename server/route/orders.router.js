import express from "express"
import { createOrder, getOrders, getOrder } from "../controller/orders.controller.js"

const router = express.Router()


router.post("/create-order", createOrder)
router.get("/", getOrders)
router.get("/:id", getOrder)



export default router