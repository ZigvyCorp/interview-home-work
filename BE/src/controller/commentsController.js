
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getComments = async (req, res) => {
    const { postId } = req.params
    try {
        const data = await prisma.comments.findMany(
            {
                where: {
                    post_id: Number(postId)
                }
            }
        )
        res.status(202).send(data)
    } catch (error) {
        console.error(error)
    }
}

const createComments = async (req, res) => {
    const body = req.body
    const newComment = {
        ...body,
        created_at: new Date(Date.now()).toISOString()
    }

    try {
        const data = await prisma.comments.create({ data: newComment })
        res.status(201).send(data)

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

export { getComments, createComments }
