export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENT_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENT_SUCCESS";
export const FETCH_COMMENTS_ERR = "FETCH_COMMENT_ERR";

export interface IComment {
  id: string;
  postId: string;
  body: string;
  email: string;
  name: string;
}

export const fetchCommentRequest = () => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentSuccess = (comments: IComment[]) => ({
  type: FETCH_COMMENTS_SUCCESS,
  state: comments,
});

export const fetchCommentError = (err: any) => ({
  type: FETCH_COMMENTS_ERR,
  state: err,
});
