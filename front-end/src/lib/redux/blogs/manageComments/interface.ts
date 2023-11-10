export interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
  postId: number;
}

export interface Comments {
  comments: Comment[];
}

export interface ManageComment {
  postsComment: {
    [postId: number]: Comment[]
  },
}