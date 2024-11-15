export type IPost = {
  _id?: string;
  owner: any;
  title: string;
  content?: string;
  tags?: string[];
  created_at: number;
};
