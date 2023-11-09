const { NotFound } = require('../cores/fail');
const {PostModel} = require('../models/post.model');
const { UserModel } = require('../models/user.model');

class PostServices {
    async getPosts() {
        return await PostModel.find().populate('owner').lean();
    }

    async createPost(userId,post) {
        const user = await UserModel.findById(userId).lean();

        if(!user) {
            throw new NotFound("User not found");
        }

        return await PostModel.create({...post, owner: userId});
    }

    async getPostById(id) {
        return await PostModel.findById(id).populate('owner').lean();
    }
}

module.exports = new PostServices();