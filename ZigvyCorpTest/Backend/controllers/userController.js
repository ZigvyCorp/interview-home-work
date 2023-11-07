import UserTest from '../Models/ModelTest.js';

const register = async (req, res) => {
    const { name, email } = req.body;
    try {
        console.log('req.body = ', req.body);
        if (name && email) {
            res.status(201).json({
                status: true,
                message: 'Đăng ký tài khoản thành công',
            });
        }
    } catch (err) {
        console.log(err);
    }
};

const getAllUser = async (req, res) => {
    const users = await UserTest.find({});
    res.json(users);
};

const userController = {
    register,
    getAllUser,
};
export default userController;
