import User from "../model/users.model.js"
import bcrypt from "bcrypt"

export const getUsers = async (req, res, next) => {
    const users = await User.find()
    res.json(users)
}

export const getOneUser = async (req, res, next) => {
    const { id } = req.params

    try {
        const user = await User.findById({ _id: id })
        if (user) return res.status(200).json(user)
        return res.status(204).json("No Content")

    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const { id } = req.params
    const { username, password, photo } = req.body
    try {
        const user = await User.findById({ _id: id })
        if (!user) return res.status(400).json("Invalid update")

        const hashedPassword = bcrypt.hashSync(password, 10)
        const updatedUser = await User.findByIdAndUpdate({ _id: id }, {
            username: username,
            password: hashedPassword,
            photo: photo 
        }, { new: true })

        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}
