import { CreateUserRequestDto } from "./CreateRequestDto";

export class UpdateUserRequestDto {
    id: number;
    name: string;
    username: string;
    password: string;
    dob: Date;
}