const PostService = require('../../services/PostService')
const UserService = require('../../services/UserService')

class PostController {
	// GET /posts?skip={skip}&limit={limit}&title={title}
	async getPosts(req, res) {
		try {
			let skip = req.query.skip || 0
			let limit = req.query.limit || 10
			let title = req.query.title || ''

			let posts = await PostService.getPostsParams(skip, limit, title)
			let users = await UserService.getUsers()
			let totalCount = await PostService.getPostsCount(title)

			posts = posts.map(post => {
				post.user = users.find(user => user.id === post.userId)

				return post
			})

			res.json({
				posts,
				totalCount,
			})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}

	// GET /posts/:id
	async getPost(req, res) {
		try {
			const post = await PostService.getPost(req.params.id)
			const user = await UserService.getUserById(post.userId)
			res.json({...post, user})
		} catch (error) {
			res.status(500).json({ error: error.message })
		}
	}
}

module.exports = new PostController()
