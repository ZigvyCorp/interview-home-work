const express = require("express");
const bcryptjs = require("bcryptjs");
const {RESPONSE_CODE} = require("../constants");
const {
    getListUser,
    createUser,
    deleteUser,
    getUserByUserName,
    updateUserByUserName,
    uploadAvatarUser,
    searchUser,
} = require("../controllers/user.controllers");
const {
    authenticate,
    authorize,
} = require("../middlewares/veryfy-token.middleware");
const {emailValidation} = require("../utils/validation");

const userRouters = express.Router();

userRouters.get(
    "/getUser",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const userList = await getListUser();
            res.send(userList).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

// tạo user
userRouters.post(
    "/createUser",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const {
                userName,
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                role,
                avatar,
            } = req.body;
            // băm password
            const salt = bcryptjs.genSaltSync();

            const hashPassword = bcryptjs.hashSync(password, salt);

            const newUser = {
                userName,
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                role,
                avatar,
            };
            console.log("newUser: ", newUser);
            // validation giá trị
            if (newUser.userName.length < 4 || newUser.userName.trim() === "")
                return res.status(400).send("Username is invalid");
            if (!emailValidation.test(newUser.email))
                return res.status(400).send("Email is invalid");
            if (newUser.password.length < 4 || newUser.password.trim() === "")
                return res.status(400).send("Password is invalid");
            newUser.password = hashPassword;

            const userList = await getListUser();

            const checkUserName = userList.findIndex(
                (user) => user.userName === newUser.userName
            );
            const checkEmail = userList.findIndex(
                (user) => user.email === newUser.email
            );
            if (checkUserName === -1) {
                // kiểm tra username , không cho cập nhật username
                if (checkEmail === -1) {
                    // kiểm tra trùng email
                    const user = await createUser(newUser);
                    res
                        .send({
                            userName: user.userName,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            role: user.role,
                            avatar: user.avatar,
                        })
                        .status(RESPONSE_CODE.OK);
                } else {
                    return res.status(RESPONSE_CODE.BAD_REQUEST).send("email đã tồn tại");
                }
            } else
                return res
                    .status(RESPONSE_CODE.BAD_REQUEST)
                    .send("userName đã tồn tại");
        } catch (error) {
            console.log(error);
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

// lấy user theo userName
userRouters.get(
    "/getUserByUserName",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const {findUserName = ""} = req.query;
            console.log(findUserName);
            if (!findUserName)
                return res.status(RESPONSE_CODE.BAD_REQUEST).send("User không tồn tại");

            const user = await getUserByUserName(findUserName);
            if (!user)
                return res
                    .status(RESPONSE_CODE.BAD_REQUEST)
                    .send(`${findUserName} Không tồn tại`);

            res.send(user).status(RESPONSE_CODE.OK);
        } catch (error) {
            console.log(error);
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

// xóa user
userRouters.delete(
    "/deleteUser",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const {findUserName = ""} = req.query;
            if (!findUserName)
                return res.status(RESPONSE_CODE.BAD_REQUEST).send("user không tồn tại");

            const user = await getUserByUserName(findUserName);
            if (!user)
                return res
                    .status(RESPONSE_CODE.BAD_REQUEST)
                    .send(`${findUserName} không tồn tại`);
            await deleteUser(findUserName);
            res.send(`xóa thành công ${findUserName}`).status(RESPONSE_CODE.OK);
        } catch (error) {
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

// cập nhật user

userRouters.put("/updateUserByUsername", async (req, res) => {
    try {
        const {
            userName,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role,
            avatar,
        } = req.body;
        const salt = bcryptjs.genSaltSync();

        const hashPassword = bcryptjs.hashSync(password, salt);
        const newUserUpdate = {
            userName,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role,
            avatar,
        };

        const findUserName = newUserUpdate.userName;
        if (!findUserName)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("Người dùng không hợp lệ");

        const user = await getUserByUserName(findUserName);
        if (!user)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send(`${findUserName} không hợp lệ`);

        if (req.body.userName !== findUserName)
            return res
                .status(RESPONSE_CODE.BAD_REQUEST)
                .send("Không thể thay đổi tài khoản");
        const userList = await getListUser();
        const checkEmail = userList.findIndex(
            (user) => user.email === newUserUpdate.email
        );
        if (checkEmail === -1 || newUserUpdate.email === user.email) {
            // kiểm tra email , cho phép giữ nguên email của user
            // validation giá trị
            if (!emailValidation.test(newUserUpdate.email))
                return res.status(400).send("Email không hợp lệ");
            if (
                newUserUpdate.password.length < 4 ||
                newUserUpdate.password.trim() === ""
            )
                return res.status(400).send("Mật khẩu không hợp lệ");
            newUserUpdate.password = hashPassword;

            await updateUserByUserName(findUserName, newUserUpdate);
            res.send("Cập nhật thành công").status(RESPONSE_CODE.OK);
        } else {
            return res.status(RESPONSE_CODE.BAD_REQUEST).send("email đã tồn tại");
        }
    } catch (error) {
        res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
});


userRouters.get(
    "/paginationUserList",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const page = req.query.page;
            const limit = req.query.limit;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            let result = {};
            const userList = await getListUser();

            if (endIndex < userList.length) {
                result.next = {
                    page: page + 1,
                    limit: limit,
                };
            }
            if (startIndex > 0) {
                result.previous = {
                    page: page - 1,
                    limit: limit,
                };
            }
            result = userList.slice(startIndex, endIndex);
            res.send(result).status(RESPONSE_CODE.OK);
        } catch (err) {
            console.log(err);
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(err);
        }
    }
);
// Tìm người dùng
userRouters.post(
    "/searchUser",
    authenticate,
    authorize("QuanTri"),
    async (req, res) => {
        try {
            const {userName = ""} = req.query;
            const [movie] = await searchUser(userName);
            res.send(movie).status(RESPONSE_CODE.OK);
        } catch (error) {
            console.log(error);
            res.status(RESPONSE_CODE.INTERNAL_SERVER_ERROR).send(error);
        }
    }
);

module.exports = {
    userRouters,
};
