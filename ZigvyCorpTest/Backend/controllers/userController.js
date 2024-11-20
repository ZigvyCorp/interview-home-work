import User from '../Models/UserModal';

const getAllUser = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

const userController = {
    getAllUser,
};
export default userController;
