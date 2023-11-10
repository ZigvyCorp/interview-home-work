export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
}

export interface Users {
  users: User[];
}