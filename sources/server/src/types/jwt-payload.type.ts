import { Role } from '../apis/types/user.type';

export interface JwtPayload {
    id: string;
    name: string;
    username: string;
    dob: Role;
}
