import { CommentService } from '../comment-model/comment.service';
import { BlogModel, ICreateBlog } from './blog.model';

export const BlogService = {
    async createBlog(Blog: ICreateBlog) {
        return await BlogModel.create(Blog);
    },
    async findAllPost() {
        return await BlogModel.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'author',
                },
            },
            {
                $unwind: '$author',
            },
            // {
            //     $unwind: {
            //         path: '$comment',
            //         preserveNullAndEmptyArrays: true,
            //     },
            // },
            // {
            //     $lookup: {
            //         from: 'blogcomments',
            //         localField: 'comment',
            //         foreignField: '_id',
            //         as: 'comment',
            //     },
            // },
            // {
            //     $group: {
            //         _id: '$_id',
            //         content: { $first: '$content' },
            //         title: { $first: '$title' },
            //         author: { $first: '$author' },
            //         createdAt: { $first: '$createdAt' },
            //         comments: { $push: '$comment' },
            //     },
            // },
            {
                $project: {
                    _id: 1,
                    content: 1,
                    title: 1,
                    comment: 1,
                    // comments: {
                    //     $reduce: {
                    //         input: '$comments',
                    //         initialValue: [],
                    //         in: { $concatArrays: ['$$value', '$$this'] },
                    //     },
                    // },
                    author: {
                        _id: '$author._id',
                        name: '$author.name',
                        email: '$author.email',
                    },
                    createdAt: 1,
                },
            },
        ]).then(async (v) => {
            return await Promise.all(
                v.map(async v => {
                    const comment = await CommentService.getBlogComments(v._id);
                    return { ...v, comment: comment }
                }))
        });
    },
    async findById(id: string) {
        return await BlogModel.findById(id);
    },

    async findBlog(search: string) {
        return await BlogModel.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ]
        });
    },

}