const axios = require('axios')

class UserService {
	// Get all users
	async getUsers() {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
		return data
	}

	// Get user by id
	async getUserById(id) {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		return data
	}
}

module.exports = new UserService()
