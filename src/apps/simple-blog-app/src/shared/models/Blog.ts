interface BlogModel {
  _id: string;
  owner: number;
  title: string;
  content: string;
  created_at: number;
  tags?: string[];
}

export default BlogModel;
