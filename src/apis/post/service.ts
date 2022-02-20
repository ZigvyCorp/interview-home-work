import { Model, Post } from '../../models/post';
import { Types } from 'mongoose';

const itemsPerPage = 10;

export default class Service {

    public static async createPost(payload): Promise<any> {
        payload.owner = new Types.ObjectId(payload.decoded._id);
        await Model.create(<Post>payload);
        return { status: 'OK' };
    }

    public static async getPage(payload): Promise<any> {
        const totalPost = await Model.countDocuments();
        const page = payload.page - 1;
        const totalPage = (totalPost / itemsPerPage) + 1;
        const posts = await Model.find({})
                    .sort({createdAt: 'desc'})
                    .limit(itemsPerPage)
                    .skip(itemsPerPage * page)
                    .populate({
                        path: 'owner',
                        select: 'username -_id'
                    });
        return {
            totalPost: totalPost,
            totalPage: parseInt(totalPage.toString()),
            posts
        }
    }

    public static async searchByTag(payload): Promise<any> {
        const totalMatch = await Model.countDocuments({ tags: { $elemMatch: { $eq: payload.tag } }});
        const page = payload.page - 1;
        const tags = await Model.find({ tags: { $elemMatch: { $eq: payload.tag } }}, { owner: 0 })
                                .sort({ createdAt: 'desc' })
                                .limit(itemsPerPage)
                                .skip(itemsPerPage * page)
                                .populate({
                                    path: 'owner',
                                    select: 'username -_id'
                                });
        if (tags.length){
            return {
                totalMatch: totalMatch,
                totalPage: parseInt( (totalMatch / itemsPerPage).toString() ) + 1,
                tags
            };
        }
        return { message: 'news was not found' };
    }
    
    public static async searchByTitle(payload): Promise<any> {
        const totalMatch = await Model.countDocuments({ title: { $regex: payload.title }});
        const page = payload.page - 1;
        const regex = new RegExp(payload.title.toLowerCase(), "i")
        const posts = await Model.find({ title: { $regex: regex }}, { creator_id: 0})
                                .sort({ createdAt: 'desc' })
                                .limit(itemsPerPage)
                                .skip(itemsPerPage * page)
                                .populate({
                                    path: 'owner',
                                    select: 'username -_id'
                                });
        if (posts.length){
            return {
                totalMatch: totalMatch,
                totalPage: parseInt( (totalMatch / itemsPerPage).toString() ) + 1,
                posts
            };
        }
        return { message: 'news was not found' };
    }

    public static async updatePost(payload): Promise<any> {
        const foundData = await Model.findById({ _id: payload._id }, { owner: 1 });
        if (foundData?.owner.toString() !== payload.decoded._id) return { message: 'You cannot edit this' };
        const post = await Model.findByIdAndUpdate({ _id: payload._id }, payload)
        return { status: 'OK', post };
    }

    public static async deletePost(payload): Promise<any> {
        const foundData = await Model.findById({ _id: payload._id }, { owner: 1 });
        if (foundData?.owner.toString() !== payload.decoded._id) return { message: 'You cannot delete this' };
        await Model.findByIdAndDelete({ _id: payload._id }).exec( err => {
            if (err) throw err;
        });
        return { status: 'OK' };
    }

}