import express from "express";
import { register, login, google, logout } from "../controller/auth.controller.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/google", google)
router.post("/logout", logout)

export default router;