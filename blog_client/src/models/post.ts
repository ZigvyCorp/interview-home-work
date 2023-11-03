export interface Post {
  _id: number;
  id: number;
  owner: number;
  title: string;
  content: string;
  created_at: Date;
  tags: string[];
}
