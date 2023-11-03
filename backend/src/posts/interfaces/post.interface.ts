export interface Post {
  id: number;
  content: string;
  created_at: number;
  title: string;
  tags: string[];
  owner: number;
}
