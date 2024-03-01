import * as postService from '../services/postService'

const getPosts = async (req, res) => {
    const { page, limit } = req.query
    try {
        if (!page || !limit) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing queries'
            })
        }
        const response = await postService.getPosts(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at post controller ' + error
        })
    }
}

const getPostDetail = async (req, res) => {
    try {
        const response = await postService.getPostDetail(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at post controller ' + error
        })
    }
}

const getPostComments = async (req, res) => {
    const { query } = req
    try {
        if (!query) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing query'
            })
        }
        const response = await postService.getPostComments(req)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at post controller ' + error
        })
    }
}

module.exports = {
    getPosts,
    getPostDetail,
    getPostComments
}