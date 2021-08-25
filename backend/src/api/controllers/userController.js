import httpStatus from 'http-status-codes';
import { UNEXPECTED_ERROR } from '../helpers/constants/Errors';
import { UserService } from '../services';

export default {
    getUsers: async (req, res) => {
        try {
            let users = await UserService.getUsers();
            res.status(httpStatus.OK).send(users);
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    addUser: (req, res) => {
        let data = req.body;
        try {
            let newUser = UserService.addUser(data);
            res.status(httpStatus.CREATED).send(newUser);
        } catch (error) {
            if (error.code === 11000) {
                res.status(httpStatus.CONFLICT).send({
                    title: 'Conflict',
                    detail: 'Username is existed'
                });
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    }
};
