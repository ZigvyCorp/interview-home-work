import { BlogCommentModel, IBlogCommentCreate } from "./comment.model"
import { Types } from "mongoose"
export const CommentService = {
    async commentBlog(comment: IBlogCommentCreate) {
        return await BlogCommentModel.create(comment)
    },
    async getBlogComments(blogId: string) {
        return await BlogCommentModel.aggregate([
            {
                $match: { blog: new Types.ObjectId(blogId) }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userComment',
                    foreignField: '_id',
                    as: 'userCommentUser'
                }
            },
            {
                $unwind: {
                    path: '$userCommentUser',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 1, 
                    comment: 1,
                    blog: 1,    
                    userCommentUser: {
                        _id: '$userCommentUser._id',
                        name: '$userCommentUser.name',
                        email: '$userCommentUser.email'
                    },
                    createdAt: 1,
                }
            }
        ]);
    }
}