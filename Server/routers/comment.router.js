const express = require("express");
const {RESPONSE_CODE} = require("../constants");
const db = require('../constants/dummy')
const {
    authenticate,
} = require("../middlewares/veryfy-token.middleware");

const commentsRouter = express.Router();

commentsRouter.get(
    "/",
    authenticate,
    async (req, res) => {
        try {
            let data = db.comment
            res.send(data).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

module.exports = {
    commentsRouter,
};
