import User from "../model/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js"

// =============== Sign In =======================
export const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return next(errorHandler(404, "User not found"))

    const compPassword = bcrypt.compareSync(password, user.password)
    if (!compPassword) return res.status(409).json("Wrong credential")
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    const { password: pass, ...other } = user._doc
    return res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(other)

  } catch (error) {
    next(errorHandler(550, "error from function"))
  }

}

// =============== Sign up =======================
export const register = async (req, res, next) => {
  const { username, email, password, role } = req.body
  if (username === "" || email === "" || password === "") {
    return res.json("fields required")
  }
  try {
    const user = await User.find({ email })
    if (user.length > 0) {
      return res.status(409).json("Email Already taken")
    }
    const usernameFound = await User.find({ username })
    if (usernameFound.length > 0) {
      return res.status(409).json("Username taken")
    } 

    const hashPassword = bcrypt.hashSync(password, 10)

    const savedUser = await User.create({
      username,
      email,
      password: hashPassword,
      role
    })
    const { password: pass, ...other } = savedUser._doc

    return res.status(201).json(other)

  } catch (error) {
    next(error)
  }



}

// =============== SignIn and SignUp with google ================
export const google = async (req, res, next) => {
  const { name, email, photo } = req.body
  try {
    const isUser = await User.findOne({email})
    if(isUser){
      const token = jwt.sign({id: isUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
      const { password, ...rest } = isUser._doc
      res
        .cookie("access_token", token, { httpOnly: true})
        .status(200)
        .json(rest)
    } else{
      const generatedPassword = Math.random().toString(36)
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10)

      const generatedUsername = name.split(" ")[0] + Math.random().toString(36).slice(-4)
      const savedUser = await User.create({
        username: generatedUsername,
        email, 
        password: hashedPassword, 
        photo 
      })

      const token = jwt.sign({id: isUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
      const { password, ...rest } = savedUser._doc
      res
        .cookie("access_token", token, { httpOnly: true})
        .status(200)
        .json(rest)

    }
  } catch (error) {
    next(errorHandler(550, "error from function"))
  }
}

// =============== Logout  =======================
export const logout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User Logged out")
  } catch (error) {
    next(errorHandler(500, "Internal server error"))    
  }
}
