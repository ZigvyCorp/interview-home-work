import { User } from '../models';
import { MONGO_ERROR, VALIDATION_ERROR } from '../helpers/constants/Errors';
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
            } else if (error.name === VALIDATION_ERROR) {
                throw new HTTPError(httpStatus.UNPROCESSABLE_ENTITY, {
                    title: 'Unable to process',
                    detail: 'Validating body failed'
                });
            }
            throw error;
        }
    },
};
