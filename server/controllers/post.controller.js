const PostController = {
    searchPosts: async (req, res) => {
        const { _limit, page, title } = req.body
        try {
            let query = `_limit=${_limit}&page=${page}`
            if (title) {
                query = query + `&title=${title}`
            }
            const posts = await fetch(`${process.env.URL_SVC}posts?${query}`)
                .then((res) => res.json())
                .catch((err) => err)
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    searchPost: async (req, res) => {
        const postId = req.param('id')
        try {
            const post = await fetch(`${process.env.URL_SVC}posts/${postId}`)
                .then((res) => res.json())
                .catch((err) => err)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    searchPostComments: async (req, res) => {
        const postId = req.param('id')
        try {
            const post = await fetch(`${process.env.URL_SVC}posts/${postId}/comments`)
                .then((res) => res.json())
                .catch((err) => err)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PostController