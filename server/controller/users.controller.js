import User from "../model/users.model.js"

export const getUsers = async (req, res, next) => {
    const users = await User.find()
    res.json(users)
}

