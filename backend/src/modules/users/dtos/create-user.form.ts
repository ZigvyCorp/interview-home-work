import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserForm {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  password: string;
}
