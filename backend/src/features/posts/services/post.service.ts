import { Post } from '../models/post';
import { findAllPostsRepository, findPostByIDRepository } from '../repositories/post.repository';
import { mapPostResponse } from '../utils/post.util';

export const findAllPostsService = async ({ page }: { page: number }) => {
    try {
        const posts: Post[] = await findAllPostsRepository({ page });
        const postsResponse = posts.map((post: Post) => mapPostResponse({ post, isSummary: true }));

        return postsResponse;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};

export const findPostByIDService = async ({ postID }: { postID: number }) => {
    try {
        const post: Post = await findPostByIDRepository({ postID });
        if (!post) throw new Error('Post not found');

        const postResponse = mapPostResponse({ post, isSummary: false });
        return postResponse;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};
