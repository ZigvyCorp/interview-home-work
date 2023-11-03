import commentModel from '../comment.model'

export const findCommentByPostId = async (postId) => {
    const comments = await commentModel.find().where('');
    return comments
}