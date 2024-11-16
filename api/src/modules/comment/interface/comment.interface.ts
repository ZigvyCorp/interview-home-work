export interface ICreateComment {
  postId: string;
  ownerId: string;
  content: string;
}

export interface IUpdateComment {
  id: string;
  userId: string;
  content: string;
}
