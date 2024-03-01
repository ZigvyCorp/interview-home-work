const Post = require('../models/Post')
const ServiceResponse = require('../response/ServiceResponse')
const Messages = require('../utils/Messages')

class PostService {

    async getByTitle(title, page, pageSize) {

        try {

            let data;
            if (page, pageSize) {

                data = await Post.find({ title: new RegExp(title, "i") }).populate('owner').skip((page - 1) * pageSize).limit(pageSize).exec()
            } else {
                data = await Post.find({ title: new RegExp(title, "i") }).populate('owner').exec()
            }

            return new ServiceResponse(
                200,
                true,
                Messages.GET_DATA_SUCCESS,
                data
            )
        } catch (err) {
            return new ServiceResponse(400, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }

    async getAll(page, pageSize) {

        try {
            let data;
            if (page, pageSize) {

                data = await Post.find().populate('owner').skip((page - 1) * pageSize).limit(pageSize).exec()
            } else {
                data = await Post.find().populate('owner').exec()
            }

            return new ServiceResponse(
                200,
                true,
                Messages.GET_DATA_SUCCESS,
                data
            )
        } catch (err) {

            return new ServiceResponse(400, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }

    async getById(id) {

        try {
            const post = await Post.findOne({ _id: id }).populate('owner').exec()

            if (post) {

                return new ServiceResponse(
                    200,
                    true,
                    Messages.GET_DATA_SUCCESS,
                    post
                )
            } else {
                return new ServiceResponse(
                    404,
                    false,
                    Messages.NOT_FOUND_DATA
                )
            }

        } catch (err) {

            return new ServiceResponse(400, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = new PostService
