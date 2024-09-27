import { UserEntity } from "src/common/entities/user.entity";

export class LoginResDto {
    user: UserEntity;
    accessToken: string;
    refreshToken: string;
    tokenExpires: number;
}