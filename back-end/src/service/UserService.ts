import prisma from '../../prismadb';

type FetchedUser = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export const fetchUsers = async (users: FetchedUser[]) => {
    try {
        await prisma.user.deleteMany();
        const modifiedUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            };
        });
        const res = await prisma.user.createMany({ data: modifiedUsers });
        console.log(`Already fetch ${res.count} users!`);
    } catch (error) {
        console.log({ error });
    }
};

export const getUsers = (page: number | undefined) => {
    if (!page) return prisma.user.findMany({});
    return prisma.user.findMany({
        skip: (page - 1) * 10,
        take: 10
    });
};
