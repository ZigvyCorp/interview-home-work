interface IPost {
  id: string;
  owner: string;
  content: string;
  created_at: string;
  tags: string[];
}

interface IComment {
  id: string;
  owner: string;
  post: string;
  content: string;
  created_at: string;
}
