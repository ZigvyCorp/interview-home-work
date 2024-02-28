const axios = require('axios')

class PostService {
	
	// Get all posts
	async getPosts() {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_embed=comments')
		return data
	}

	// Get posts count
	async getPostsCount(title = '') {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?title_like=${title}&_embed=comments`,
		)
		return data.length
	}

	// Get posts with params
	async getPostsParams(skip = 0, limit = 10, title = '') {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${skip}&title_like=${title}&_embed=comments`,
		)
		return data
	}

	// Get post by id
	async getPost(id) {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments`)
		return data
	}

	// Get comments by post id
	async getComments(id) {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		return data
	}
}

module.exports = new PostService()
