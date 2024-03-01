const Comment = require("../models/Comment")
const ServiceResponse = require("../response/ServiceResponse")
const Messages = require("../utils/Messages")

class CommentService {

    async getByPost(postId) {

        try {

            const data = await Comment
                .find({ post: postId })
                .populate("owner")
                .exec()

            return new ServiceResponse(200, true, Messages.GET_DATA_SUCCESS, data)

        } catch (err) {

            console.log(err)
            return new ServiceResponse(500, false, Messages.INTERNAL_SERVER_ERROR)
        }
    }
}

module.exports = new CommentService
