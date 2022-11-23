export namespace Posts {
  export interface UserInfo {
    id?: string;
    name?: string;
    avatarUrl?: string;
  }

  export interface Post {
    id?: number;
    owner?: number;
    title?: string;
    content?: string;
    created_at?: number;
    tags?: Array<string>;
  }

  export interface PostList extends Array<Post> {}

  export interface FetchPostsResponse {
    items: PostList;
  }
}
