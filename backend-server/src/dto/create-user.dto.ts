export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly password: string;
  readonly photo: string;
  readonly status: string;
  readonly role: string;
}
