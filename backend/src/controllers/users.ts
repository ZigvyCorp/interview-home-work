import usersService from "../services/users"
import { Request, Response } from "express"

export const getUser = async (req: Request, res: Response) => {
    const id = req.params?.id
    const data = await usersService.getUser(id)
    if (data?.statusCode && data.statusCode !== 200) {
        res.status(data.statusCode).json()
    }
    res.status(200).json(data)
}

const usersController = {
    getUser
}
export default usersController