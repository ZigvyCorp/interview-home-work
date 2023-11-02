import { getComment } from '../services/commentService.js'

export let GetComments = async (req, res) => {
    try {

        if (req.query.postId) {
            const response = await getComment(req.query.postId);
            return res.status(200).json(response)
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}