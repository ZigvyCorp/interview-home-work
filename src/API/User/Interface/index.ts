export namespace Users {
  export interface UserInfo {
    id?: string;
    name?: string;
    avatarUrl?: string;
  }

  export interface User {
    id?: number;
    username?: string;
    password?: string;
    name?: string;
    dob?: string;
    created_at?: number;
  }

  export interface UserList extends Array<User> {}

  export interface FetchUsersResponse {
    items: UserList;
  }
}
