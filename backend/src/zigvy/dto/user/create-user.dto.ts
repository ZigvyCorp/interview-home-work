import { IsDateString, IsDefined, IsString, MinLength } from "class-validator";


export class CreateUserDto {
    @IsDefined()
    @IsString()
    name: string;


    @IsDefined()
    @IsString()
    username: string;

    @IsDefined()
    @MinLength(3)
    @IsString()
    password: string;

    @IsDefined()
    @IsDateString()
    dob: Date;
}
