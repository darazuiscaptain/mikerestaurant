import User from "../model/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req, res, next) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })
    if (!user) return res.status(409).json("Wrong Credential")

    const compPassword = bcrypt.compareSync(password, user.password)
    if (!compPassword) return res.status(409).json("Wrong Credential")

    const token = jwt.sign({ id: user._id }, "jwt_token", { expiresIn: '1h' })

    res.json(token)

  } catch (error) {
    next(errorHandler(550, "error from function"))
  }

}

// =============== Sign up Controller =======================
export const register = async (req, res, next) => {
  const { username, email, password } = req.body
  if (username === "" || email === "" || password === "") {
    return res.json("fields required")
  }
  try {
    const user = await User.find({ email })
    if (user.length > 0) return res.json("Email Already taken")

    const hashPassword = bcrypt.hashSync(password, 10)

    const savedUser = await User.create({
      username,
      email,
      password: hashPassword
    })

    res.json(savedUser)

  } catch (err) {
    res.json(err)
  }



}
