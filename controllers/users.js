import { UsersModel } from "../models/users.js"

export class UsersController {
    async getAllUser(req, res) {
        try {
            console.log("GET all user")
            const result = await UsersModel.find()
            return res.status(200).json({ result })
        } catch (error) {
            return res.status(404).json({ error: error })
        }
    }
}