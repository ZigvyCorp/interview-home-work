export interface Comment {
  _id: string;
  id: number;
  owner: number;
  post: number;
  content: string;
  created_at: Date;
}
