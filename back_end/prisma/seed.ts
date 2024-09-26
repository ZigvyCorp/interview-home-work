import { faker } from '@faker-js/faker';

import prisma from '../src/lib/prismadb';
import type { User, Post } from '@prisma/client';

async function createUsers() {
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                username: faker.internet.userName(),
                password: faker.internet.password(),
                name: faker.person.fullName(),
                dob: faker.date.birthdate(),
                created_at: faker.date.past({ years: 5 }),
                posts: { create: createPosts() },
            },
        });
    }
    await createComments();
}

const RANDOM_RECORD_NUMBER = Math.random() * (10 - 2) + 2;

function createPosts() {
    const posts = [];
    for (let i = 0; i < RANDOM_RECORD_NUMBER; i++) {
        posts.push({
            title: faker.lorem.words(),
            content: faker.lorem.paragraphs({ min: 20, max: 50 }),
            created_at: faker.date.past({ years: 5 }),
            tags: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
        });
    }
    return posts;
}

async function createComments() {
    const allPosts = await prisma.post.findMany();
    const allUsers = await prisma.user.findMany();

    const randomFromArray = (array: User[] | Post[]) => {
        const index = Math.floor(Math.random() * array.length);
        return { id: array[index].id, created_at: array[index].created_at };
    };

    for (let i = 0; i < 200; i++) {
        const post = randomFromArray(allPosts);
        await prisma.comment.create({
            data: {
                content: faker.lorem.sentence(),
                post: post.id,
                owner: randomFromArray(allUsers).id,
                created_at: faker.date.future({
                    years: 1,
                    refDate: post.created_at,
                }),
            },
        });
    }
}

createUsers();
