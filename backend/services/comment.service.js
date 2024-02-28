const axiosClient = require("../utils/axiosClient");
const getFakeDate = require("../utils/getFakeDate");
const getFakeUserId = require("../utils/getFakeUserId");

class CommentService {
    getComments = async () => {
        const url = '/comments';
        let comments = await axiosClient.get(url);

        comments = comments.map(comment => {
            return {
                id: comment.id,
                owner: getFakeUserId(),
                post: comment.postId,
                content: comment.body,
                created_at: getFakeDate(new Date("2000/01/01"), new Date())
            };
        });

        return comments;
    };
}

module.exports = new CommentService();