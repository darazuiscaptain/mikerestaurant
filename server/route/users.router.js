import express from "express"
import {  getUsers, getOneUser, updateUser } from "../controller/users.controller.js"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getOneUser)
router.put("/:id", updateUser)

export default router;