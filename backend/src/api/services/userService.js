import { User } from '../models';
import { MONGO_ERROR } from '../helpers/constants/Errors';
import httpStatus from 'http-status-codes';
import HTTPError from '../helpers/classes/httpErrors';

export default {
    getUsers: async () => {
        return await User.find({}, (err) => {
            if (err) throw err;
        })
            .select([
                '-updatedAt',
                '-__v'
            ]);
    },

    addUser: async (data) => {
        try {
            let newUser = new User(data);
            return await newUser.save();
        } catch (error) {
            if (error.name === MONGO_ERROR && error.code === 11000) {
                throw new HTTPError(httpStatus.CONFLICT, {
                    title: 'Conflict',
                    detail: 'Username has existed'
                });
            }
            throw error;
        }
    },
};
