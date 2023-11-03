import { IsNotEmpty } from "class-validator";

export class CreateUserRequestDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    dob: Date;
}