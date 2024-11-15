export interface ICreateUser {
  username: string;
  password: string;
  name: string;
  dob?: string;
}

export interface IUserOmitPassword {
  id: string;
  username: string;
  name: string;
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVerifyUser {
  id: string;
  username: string;
  name: string;
  iat: number;
  exp: number;
}
