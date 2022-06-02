export type FindUserResponse = {
  id: number;
  username: string;
  password?: string;
  name: string;
  dob: Date;
  createAt: Date;
}