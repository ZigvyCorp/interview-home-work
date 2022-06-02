export type FindUserResponse = {
  id: number;
  username: string;
  password?: string;
  name: string;
  dob: Date;
  createAt: Date;
  removed: boolean
}

export type UserCreate = {
  id: number;
  username: string;
  password: string;
  name: string;
  dob: Date;
  createAt: Date;
  removed: boolean
}