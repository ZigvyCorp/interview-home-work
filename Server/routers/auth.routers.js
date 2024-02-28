const express = require("express");
const bcryptjs = require("bcryptjs");
const {RESPONSE_CODE} = require("../constants");
const {stringRequired, emailRequired} = require("../utils/validation")
const {
    getUserByUserName,
    getListUser,
    registerUser,
} = require("../controllers/user.controllers");
const {generateToken} = require("../helpers/jwt.helpers");

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    try {
        const {userName, password} = req.body;
        if (!userName || !password)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("Invalid Data");
        const user = await getUserByUserName(userName);
        if (!user)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("userName or password is invalid");
        const checkPassword = bcryptjs.compareSync(password, user.password);
        if (!checkPassword)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("Invalid Password");
        const token = generateToken(user);
        res.status(RESPONSE_CODE.OK).send({
            accessToken: token,
        });
    } catch (error) {
        console.log({error});
        res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
});

authRouter.post("/register", async (req, res) => {
    try {
        let {userName, name, email, password} =
            req.body;
        const isValidEmail = emailRequired.parse(email)
        const isValidName = stringRequired.parse(name)
        const isValidUserName = stringRequired.parse(userName)
        const isValidPassword = stringRequired.parse(password)

        if (!isValidEmail || !isValidName || !isValidUserName || !isValidPassword) {
            return res.status(RESPONSE_CODE.BAD_REQUEST).send("Bad Request");
        }
        const salt = bcryptjs.genSaltSync();

        const passwordHashed = bcryptjs.hashSync(password, salt);
        const userList = await getListUser();

        const dataRegister = {
            userName,
            name,
            email,
            password: passwordHashed
        }

        const index = userList.findIndex(
            (user) => user.userName === dataRegister.userName
        );

        if (index === -1) {
            await registerUser(dataRegister);
            res
                .send("Register Success")
                .status(RESPONSE_CODE.OK);
        } else
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("Account already exists");
    } catch (error) {
        console.log(error);
        res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
});

module.exports = {
    authRouter,
};
