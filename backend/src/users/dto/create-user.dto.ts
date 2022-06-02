export class CreateUserDto {
  id: number;
  username: string;
  password: string;
  name: string;
  dob: Date;
  removed: boolean
}
