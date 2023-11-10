import { User } from "../model/UserModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    const { username, password, name, dob } = req.body;
    if (username && password && name && dob) {
        if (username) {
            const isCheckUsername = await User.find({ username: username });
            const isCheckName = await User.find({ name: name });
            if (isCheckUsername.length || isCheckName.length) {
                res.status(400).json({ message: "The name or user nam is existed" })
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            const newUser = await User.create({
                username,
                name,
                password: hashPassword,
                dob
            });
            return res.status(200).json({
                message: "Sign Up Success !!!",
                content: {
                    newUser
                }
            })
        } else {
            res.status(400).json({ message: "Username is not defined" })
        }
    } else {
        return res.json({
            status: "err",
            message: "The Username, password, name is require",
        });
    }
};
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        if (username) {
            const useDb = await User.find({ username: username });
            if (useDb == "") {
                res.status(401).json({ message: "Username is not existed" })
            } else if (useDb) {
                const checkPassword = bcrypt.compareSync(password, useDb[0].password);
                if (checkPassword) {
                    res.status(200).json({
                        message: "Login successfully",
                        content: {
                            _id: useDb[0]._id,
                            username: useDb[0].username,
                            name: useDb[0].name,
                        },
                    })
                } else {
                res.status(402).json({ message: "Username or password is wrong" })
                }
            }
        } else {
            res.status(402).json({ message: "Please fill username" })
        }
    } else {
        return res.json({
            status: "err",
            message: "The email and password is require",
        });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (id) {
            const checkName = await User.findOne(data);
            if (checkName) {
                return res.status(400).json({ message: "The name is duplicate" })
            }
            const findUser = await User.findById(id);
            findUser.name = data.name;
            await findUser.save();
            if (findUser) {
                return res.status(200).json({
                    message: "Updated successfully",
                    content: findUser,
                })
            } else {
                return res.status(400).json({
                    message: "The user is not defined",
                })
            }
        } else {
            return res.json({
                status: "err",
                message: "The id of user is required",
            });
        }
    } catch (error) {
        return res.json({
            status: "err",
            message: error,
        });
    }
};
export const getListUser = async (req, res) => {
    try {
        const listUser = await User.find().select([
            "_id",
            "username",
            "name"
        ])
        if (listUser) {
            return res.status(200).json({
                content: listUser
            });
        }
        else {
            return res.json({
                status: "err",
                message: "The id of user is required",
            });
        }
    } catch (error) {
        return res.json({
            status: "err",
            message: error,
        });
    }
};
export const getUserDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const userDetial = await User.findById(id)
        if (userDetial) {
            return res.status(200).json({
                content: userDetial,
            });
        } else {
            return res.status(400).json({
                message: "The User id is require",
            });
        }
    } catch (err) {
        return res.json({
            status: "err",
            message: err,
        });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userDelete = await User.findByIdAndDelete(id)
        if (userDelete) {
            return res.status(200).json({
                message: "The User id ",
            });
        } else {
            return res.status(400).json({
                message: "The User id is require",
            });
        }
    } catch (err) {
        return res.json({
            status: "err",
            message: err,
        });
    }
};