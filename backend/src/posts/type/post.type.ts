
export type FindPostResponse = {
  title: string,
  content: string,
  createAt: Date,
  removed?: boolean,
  tags: string[]
  owner: any;
}

export type PostCreate = {
  title: string,
  content: string,
  tags: string[]
}