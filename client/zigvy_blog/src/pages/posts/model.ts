export type PostDataType = {
  _id: string;
  userId: string;
  title: string;
  body: string;
  countComment: number;
  user: string;
};

export type CommentDataType = {
  body: string;
  name: string;
};

export type PostDetailDataType = {
  post: PostDataType;
  comment: CommentDataType[];
};
