import { Model, Comment } from '../../models/comment';
import { Types } from 'mongoose';
import { Model as PostModel, Post } from '../../models/post';

const itemsPerPage = 10;

export default class Service {

    public static async createComment(payload): Promise<any> {
        payload.owner = new Types.ObjectId(payload.decoded._id);
        const newComment = await Model.create(<Comment>payload);
        await PostModel.findByIdAndUpdate({ _id: payload.post }, { $push: { comments: newComment._id }}).exec( err => {
            if (err) throw err;
        });
        return { status: 'OK' };
    }
    
    public static async getCommentById(payload): Promise<any> {
        const comment = await Model.findById(payload._id).populate({ path: 'owner', select: 'username -_id'}).populate({ path: 'post', select: '-owner'});
        return { comment };
    }

    public static async updateComment(payload): Promise<any> {
        const foundData = await Model.findById({ _id: payload._id }, { owner: 1 });
        if (foundData?.owner.toString() !== payload.decoded._id) return { message: 'You cannot edit this' };
        const comment = await Model.findByIdAndUpdate({ _id: payload._id }, payload, { new: true });
        return { status: 'OK', comment };
    }

    public static async deleteComment(payload): Promise<any> {
        const foundData = await Model.findById({ _id: payload._id }, { owner: 1, post: 1 });
        if (foundData?.owner.toString() !== payload.decoded._id) return { message: 'You cannot edit this' };
        await Model.findByIdAndDelete({ _id: payload._id }).exec( err => {
            if (err) throw err;
        });
        const _id = new Types.ObjectId(payload._id);
        const post = await PostModel.findByIdAndUpdate({ _id: foundData.post }, { $pull: { comments: { $in: [_id] } }}, { safe: true, upsert: true, new: true })
        return { status: 'OK', post };
    }

}