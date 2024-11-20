import { PrismaClient } from '@prisma/client';
import { PAGE_SIZE } from '~/constants/constants';

const prisma = new PrismaClient();

export const findAllPostsRepository = async ({ page }: { page: number }): Promise<any> => {
    try {
        const offset = (page - 1) * PAGE_SIZE;
        const posts = await prisma.post.findMany({
            where: {
                deleted: false,
            },
            take: PAGE_SIZE,
            skip: offset,
            include: {
                userDetail: true,
            },
        });
        return posts;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};

export const findPostByIDRepository = async ({ postID }: { postID: number }): Promise<any> => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: postID,
                deleted: false,
            },
            include: {
                userDetail: true,
            },
        });
        return post;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};
