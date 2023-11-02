import { dateFormatUtil } from '~/utils/date.util';
import { Post, PostResponse } from '../models/post';

export const mapPostResponse = ({ post, isSummary }: { post: Post; isSummary: boolean }) => {
    const { id, body, createdDate, totalComments, title, userDetail } = post;
    const postResponse: PostResponse = {
        id,
        createdDate: dateFormatUtil(createdDate),
        title,
        body: isSummary ? body.slice(0, 100) : body,
        totalComments,
        userDetail: {
            name: `${userDetail!.firstName} ${userDetail!.lastName}`,
        },
    };
    return postResponse;
};
