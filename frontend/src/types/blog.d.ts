export interface IBlog {
  _id?: string;
  id: string;
  owner: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
}
