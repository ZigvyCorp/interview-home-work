import postModel from '../models/post.model'

class PostService {
    static getPostsService = async (query) => {
        const { title, page, limit } = query
        console.log(page, limit)
        const skip = (page - 1) * limit
        const filter = {
            "$or": [
                { title: { $regex: title, $options: "i" } },
            ]
        }
        if (!title) delete filter.$or
        const posts = await postModel.find(filter).skip(skip).limit(limit).sort({ created_at: -1 })
        console.log(posts.length);
        return posts
    }

    static getPostById = async (postId) => {
        const post = await postModel.findById(postId)
        return post
    }

    static createPost = async (post) => {
        const newPost = await postModel.create(post)
        return newPost
    }

    static updatePost = async (postId, post) => {
        const updatedPost = await postModel.findByIdAndUpdate(postId, post, { new: true })
        return updatedPost
    }
}

export default PostService