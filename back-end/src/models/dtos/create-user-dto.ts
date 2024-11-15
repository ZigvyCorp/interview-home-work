export interface CreateUserDto {
    username: string;
    password: string;
    name?: string;
    dob?: string;
}