import prisma from '../../prismadb';

type Comment = {
    id: number;
    postId: number;
    email: string;
    body: string;
};

export const fetchComments = async (comments: Comment[]) => {
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
