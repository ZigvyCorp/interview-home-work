import prisma from '../../prismadb';

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export const fetchPosts = async (posts: Post[]) => {
    try {
        await prisma.post.deleteMany();
        const modifiedPosts = posts.map(post => {
            return {
                id: post.id,
                ownerId: post.userId,
                title: post.title,
                content: post.body
            };
        });
        const res = await prisma.post.createMany({ data: modifiedPosts });
        console.log(`Already fetch ${res.count} posts!`);
    } catch (error) {
        console.log({ error });
    }
};

export const getPosts = (page: number | undefined) => {
    if (!page) return prisma.post.findMany({});
    return prisma.post.findMany({
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
                    email: true,
                    content: true,
                    createdAt: true
                }
            }
        }
    });
};
