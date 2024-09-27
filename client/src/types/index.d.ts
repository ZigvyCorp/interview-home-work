type Post = {
    id: number,
    owner: number,
    title: string,
    content: string, 
    createdAt: Date,
    tags: string[],
};

type Comments = {
  id: number;
  owner: number;
  post: number;
  content: string;
  createdAt: Date;
};

type User = {
  id: number;
  username: string;
  password: string;
  name: string;
  dob: string;
  createdAt: Date;
};

type PageInfo = {
  pageNumber: number;
  totalPages: number;
  totalRecords: number;
  pageSize: number;
}
