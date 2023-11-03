export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  userName?: string;
};

export type PostList = Post[];
