import { ObjectId } from 'mongodb';
import { UserGender, UserRole, UserStatus } from '~/constants/enum';

interface UserConstructor {
  _id?: ObjectId;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  gender?: UserGender;
  status?: UserStatus;
  role?: UserRole;
  date_of_birth?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export default class User {
  _id?: ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: UserGender;
  status: UserStatus;
  role: UserRole;
  date_of_birth: Date;
  created_at: Date;
  updated_at: Date;

  constructor({
    _id,
    email,
    password,
    firstName,
    lastName,
    gender,
    status,
    role,
    date_of_birth,
    created_at,
    updated_at
  }: UserConstructor) {
    const date = new Date();
    this._id = _id;
    this.email = email;
    this.password = password;
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.gender = gender || UserGender.Other;
    this.status = status || UserStatus.Active;
    this.role = role || UserRole.User;
    this.date_of_birth = date_of_birth || date;
    this.created_at = created_at || date;
    this.updated_at = updated_at || date;
  }
}
