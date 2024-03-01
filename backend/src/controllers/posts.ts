import postsService from "../services/posts"
import { Request, Response } from "express"

export const getPosts = async (req: Request, res: Response) => {
    const { start, limit } = req.query
    const data = await postsService.getPosts(start as string, limit as string)
    if (data?.statusCode && data.statusCode !== 200) {
        res.status(data.statusCode).json()
    }
    res.status(200).json(data)
}

export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params
    const data = await postsService.getPostById(id as string)
    if (data?.statusCode && data.statusCode !== 200) {
        res.status(data.statusCode).json()
    }
    res.status(200).json(data)
}

const postsController = {
    getPosts,
    getPostById
}
export default postsController