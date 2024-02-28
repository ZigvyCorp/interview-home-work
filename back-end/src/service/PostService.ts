import { UserService } from '.';
import prisma from '../../prismadb';
import { PostFromMockApi, createPostRequest, updatePostRequest } from '../types';

export const fetchPosts = async (posts: PostFromMockApi[]) => {
    try {
        //reset
        await prisma.post.deleteMany();

        //mapping
        const modifiedPosts = posts.map(post => {
            return {
                id: post.id,
                ownerId: post.userId,
                title: post.title,
                content: post.body
            };
        });

        //create
        const res = await prisma.post.createMany({ data: modifiedPosts });
        console.log(`Already fetch ${res.count} posts!`);
    } catch (error) {
        throw error;
    }
};

export const getPosts = async (page: number, keyword: string, ownerId: number) => {
    try {
        //get all
        if (!page) return prisma.post.findMany({});

        //create condition
        let condition = {};
        if (keyword) condition = { ...condition, title: { contains: keyword } };
        if (ownerId) {
            //check user exist
            await UserService.getUser(ownerId);
            condition = { ...condition, ownerId };
        }

        //get by pagination
        const posts = await prisma.post.findMany({
            where: condition,
            skip: (page - 1) * 10,
            take: 10,
            include: {
                owner: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                comments: {
                    select: {
                        id: true,
                        email: true,
                        content: true,
                        createdAt: true
                    }
                }
            }
        });
        return posts;
    } catch (error) {
        throw error;
    }
};

export const getPost = async (id: number) => {
    try {
        const post = await prisma.post.findFirst({
            where: { id },
            include: {
                owner: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                comments: {
                    select: {
                        id: true,
                        email: true,
                        content: true,
                        createdAt: true
                    }
                }
            }
        });
        if (!post) throw { message: 'Post does not exist' };
        return post;
    } catch (error) {
        throw error;
    }
};

export const updatePost = async (id: number, post: updatePostRequest) => {
    try {
        const updatedPost = await prisma.post.update({
            where: { id },
            data: { ...post }
        });
        return updatedPost;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (post: createPostRequest) => {
    try {
        //check user exist
        await UserService.getUser(post.ownerId);

        //check post exist
        const checkPost = await prisma.post.findFirst({ where: { id: post.id } });
        if (checkPost) throw { message: 'Post is already exist' };

        //create post
        const createdPost = await prisma.post.create({
            data: { ...post }
        });
        return createdPost;
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (id: number) => {
    try {
        const res = await prisma.post.delete({
            where: { id }
        });
        return res;
    } catch (error) {
        throw error;
    }
};
