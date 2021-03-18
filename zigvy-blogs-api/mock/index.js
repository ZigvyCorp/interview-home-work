// const users = require('./users')
const posts = require('./posts')
// const tags = require('./tags')



// const UsersService = new (require('../services/users-service'))()
const PostsService = new (require('../services/posts-service'))()
// const TagsService = new (require('../services/tags-service'))()

// users.forEach((user) => UsersService.create(user))
posts.forEach((post) => PostsService.create(post))
// tags.forEach((tag) => TagsService.create(tag))
