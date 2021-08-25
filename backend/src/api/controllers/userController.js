import httpStatus from 'http-status-codes';
import { UNEXPECTED_ERROR } from '../helpers/constants/Errors';
import { UserService } from '../services';
import HTTPError from '../helpers/classes/httpErrors';

export default {
    getUsers: async (req, res) => {
        try {
            let users = await UserService.getUsers();
            res.status(httpStatus.OK).send(users);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    },

    addUser: async (req, res) => {
        let data = req.body;
        try {
            let newUser = await UserService.addUser(data);
            res.status(httpStatus.CREATED).send(newUser);
        } catch (error) {
            if (error instanceof HTTPError) {
                res.status(error.status).send(error.data);
                return;
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(UNEXPECTED_ERROR);
        }
    }
};
