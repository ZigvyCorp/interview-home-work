import { PostService } from '.';
import prisma from '../../prismadb';
import { CommentFromMockApi, CreateCommentRequest, UpdateCommentRequest } from '../types';

export const fetchComments = async (comments: CommentFromMockApi[]) => {
    try {
        await prisma.comment.deleteMany();
        const modifiedComments = comments.map(comment => {
            return {
                id: comment.id,
                postId: comment.postId,
                email: comment.email,
                content: comment.body
            };
        });
        const res = await prisma.comment.createMany({ data: modifiedComments });
        console.log(`Already fetch ${res.count} comments!`);
    } catch (error) {
        console.log({ error });
    }
};

export const getComment = async (id: number) => {
    try {
        const comment = await prisma.comment.findFirst({
            where: { id }
        });
        if (!comment)
            throw {
                message: 'Comment does not exist'
            };
        return comment;
    } catch (error) {
        throw error;
    }
};

export const createComment = async (comment: CreateCommentRequest) => {
    try {
        //check comment exist
        const checkComment = await prisma.comment.findFirst({
            where: { id: comment.id }
        });
        if (checkComment) throw { message: 'Comment is already exist' };

        //check post
        await PostService.getPost(comment.postId);

        //create comment
        const createdComment = await prisma.comment.create({
            data: { ...comment }
        });
        return createdComment;
    } catch (error) {
        throw error;
    }
};

export const updateComment = async (commentId: number, comment: UpdateCommentRequest) => {
    try {
        //check comment exist
        await getComment(commentId);

        //update
        const updatedComment = await prisma.comment.update({
            where: { id: commentId },
            data: comment
        });
        return updatedComment;
    } catch (error) {
        throw error;
    }
};

export const deleteComment = async (id: number) => {
    try {
        const res = await prisma.comment.delete({
            where: { id }
        });
        return res;
    } catch (error) {
        throw error;
    }
};
