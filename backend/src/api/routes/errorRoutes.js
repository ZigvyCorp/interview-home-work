import httpStatus from 'http-status-codes';
import { NOTFOUND_ERROR } from '../helpers/constants/Errors';
const router = require('express').Router();

router.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).send(NOTFOUND_ERROR);
});

export default router;