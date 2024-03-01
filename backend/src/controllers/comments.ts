import commentsService from "../services/comments"
import { Request, Response } from "express"

export const getComments = async (req: Request, res: Response) => {
    const { postId } = req.query
    const data = await commentsService.getComments(postId as string)
    if (data?.statusCode && data.statusCode !== 200) {
        res.status(data.statusCode).json()
    }
    res.status(200).json(data)
}

const commentsController = {
    getComments
}
export default commentsController