import { PrismaClient } from '@prisma/client';
import { PAGE_SIZE } from '~/constants/constants';

const prisma = new PrismaClient();

export const findAllCommentsByPostIDRepository = async ({
    postID,
    page,
}: {
    postID: number;
    page: number;
}): Promise<any> => {
    try {
        const offset = (page - 1) * PAGE_SIZE;
        const comments = await prisma.comment.findMany({
            where: {
                deleted: false,
                postID: postID,
            },
            take: PAGE_SIZE,
            skip: offset,
            include: {
                userDetail: true,
            },
        });
        if (comments) return comments;

        throw new Error('Internal server error');
    } catch (error) {
        console.log((error as Error).stack);
    }
};
