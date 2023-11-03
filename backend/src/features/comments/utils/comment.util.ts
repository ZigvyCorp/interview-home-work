import { dateFormatUtil } from '~/utils/date.util';
import { Comment, CommentResponse } from '../models/comment';

export const mapCommentResponse = ({ comment }: { comment: Comment }) => {
    const { id, body, createdDate, userDetail, postID, userID } = comment;
    const commentResponse: CommentResponse = {
        id,
        postID,
        userID,
        body,
        createdDate: dateFormatUtil(createdDate),
        userDetail: {
            name: `${userDetail!.firstName} ${userDetail!.lastName}`,
        },
    };
    return commentResponse;
};
