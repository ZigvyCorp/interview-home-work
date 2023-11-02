import { getPosts } from "../services/postService";

export let GetPosts = async (req, res) => {
    try {
        const response = await getPosts();
        return res.status(200).json(response)


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}