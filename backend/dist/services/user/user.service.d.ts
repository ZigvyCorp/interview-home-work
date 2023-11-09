import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { IUser } from 'src/core/interface/user.interface';
export declare class UserSevice {
    private readonly db;
    constructor(db: IMongoDbServices);
    getUsers(): Promise<IUser[]>;
}
