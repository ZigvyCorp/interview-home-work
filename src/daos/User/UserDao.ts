import User, { IUser } from '@entities/User';
import logger from '@shared/Logger';


export interface IUserDao {
    getOne: (id: string) => Promise<IUser | null>;
    getAll: () => Promise<IUser[]>;
    add: (user: IUser) => Promise<void | IUser>;
    update: (user: IUser) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class UserDao implements IUserDao {

    /**
     * @param id
     */
    public async getOne(userName: string): Promise<IUser | null> {
        return await User.findOne({ username: userName });
    }


    /**
     *
     */
    public async getAll(): Promise<IUser[]> {
        return await User.find();
    }


    /**
     *
     * @param user
     */
    public async add(user: IUser): Promise<void | IUser> {
        return User.create(user)
            .then((user: IUser) => user)
            .catch((error: Error) => {
                logger.log('error', error.message);
            });
    }


    /**
     *
     * @param user
     */
    public async update(user: IUser): Promise<void> {
        const res = await User.updateOne({ _id: user._id }, { ...user });
        return res.n && res.nModified;
    }


    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<void> {
        const res = await User.deleteMany({ id });
        return {} as any;
    }
}

export default UserDao;
