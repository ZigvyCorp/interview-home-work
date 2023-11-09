import { IUser } from 'src/core/interface/user.interface';
import { UserSevice } from 'src/services/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserSevice);
    getUsers(): Promise<IUser[]>;
}
