export const FETCH_COMMENTS = "FETCH_COMMENTS"
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS"

export interface FetchCommentsAction { type: typeof FETCH_COMMENTS, payload: any }
export interface FetchCommentsSuccessAction { type: typeof FETCH_COMMENTS_SUCCESS, payload: any }

export type CommentActionTypes = FetchCommentsAction | FetchCommentsSuccessAction;
