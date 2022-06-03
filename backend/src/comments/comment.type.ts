
export type FindCommentResponse = {
  content: string;
  owner: any;
  post: any;
  createAt: Date;
  removed?: boolean
}