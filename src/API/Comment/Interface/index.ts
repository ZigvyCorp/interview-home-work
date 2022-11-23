export namespace Comments {
  export interface UserInfo {
    id?: string;
    name?: string;
    avatarUrl?: string;
  }

  export interface Comment {
    id?: number;
    owner?: number;
    post?: number;
    content?: string;
    created_at?: number;
  }

  export interface CommentList extends Array<Comment> {}

  export interface FetchCommentsResponse {
    items: CommentList;
  }
}
