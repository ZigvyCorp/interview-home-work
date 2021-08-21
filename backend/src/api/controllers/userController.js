import httpStatus from 'http-status-codes';
import reqResponse from '../helpers/handlers/responseHandler';

export default {
    getUsers: async (req, res) => {
        res.status(httpStatus.NOT_IMPLEMENTED).send(reqResponse.errorResponse(501));
    },

    addUser: (req, res) => {
        res.status(httpStatus.NOT_IMPLEMENTED).send(reqResponse.errorResponse(501));
    }
};
