import { Post } from '~/features/posts/models/post';
import { searchPostByKeywordRepository } from '../repositories/post.repository';
import { mapPostResponse } from '~/features/posts/utils/post.util';

export const searchPostByKeywordService = async ({ keyword }: { keyword: string }) => {
    try {
        const kw = keyword.toLowerCase().trim();
        const post: Post = await searchPostByKeywordRepository({ keyword: kw });
        if (!post) throw new Error('Post not found');

        const postResponse = mapPostResponse({ post, isSummary: false });
        return postResponse;
    } catch (error) {
        console.log((error as Error).stack);
        throw new Error((error as Error).message);
    }
};
