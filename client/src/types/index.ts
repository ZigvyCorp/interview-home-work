export type PostType = {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  comments: CommentType[];
  owner: {
    avatar: string;
    name: string;
  };
  createdAt: string;

};
export type User = {
  name: string;
  username: string;
  avatar: string;
  dob: string;
}
export type CommentType = {
  content: string;
  owner: { name: string, avatar: string };
  createdAt: string;
}