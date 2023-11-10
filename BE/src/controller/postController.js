import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

const getPosts = async (_, res) => {
    try {
        const data = await prisma.post.findMany()
        res.status(202).send(data)
    } catch (error) {
        console.error(error)
    }
}

const createPost = async (req, res) => {
    const body = req.body
    const newPost = {
        ...body,
        created_at: new Date(Date.now()).toISOString()
    }

    try {
        const data = await prisma.post.create({ data: newPost })
        res.status(201).send(data)

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}
const searchPost = async (req, res) => {
    const { query } = req.query
    console.log(req.query)
    try {
        const data = await prisma.post.findMany({
            where: {
                title: {
                    contains: query,
                    mode: "insensitive"
                }
            }
        })

        if (data.length == 0) {
            res.status(200).send("Srr cant find")
        } else {
            res.status(202).send(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export { getPosts, createPost, searchPost }
