import { ParamsDictionary } from 'express-serve-static-core';

// Body: Thêm comment
export interface CreateCommentReqBody {
  content: string;
}

// Params: Cập nhật comment
export interface CommentIdReqParams extends ParamsDictionary {
  comment_id: string;
}

// Body: Cập nhật comment
export interface UpdateCommentReqBody {
  content: string;
}
