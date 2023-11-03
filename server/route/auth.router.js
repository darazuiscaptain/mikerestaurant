import express from "express";
import { register, login } from "../controller/auth.controller.js"

const router = express.Router()
// import passport from "passport";

// router.get("/google", passport.authenticate('google'))
// router.get("/google/callback", passport.authenticate({
//     succssRedirect: "/",
//     failureRedirect: "/login"
// }))

router.post("/register", register)
router.post("/login", login)

export default router;