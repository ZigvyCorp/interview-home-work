import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchPostByKeywordRepository = async ({
    keyword,
}: {
    keyword: string;
}): Promise<any> => {
    try {
        const post = await prisma.post.findFirst({
            where: {
                deleted: false,
                title: {
                    contains: keyword,
                    mode: 'insensitive',
                },
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
