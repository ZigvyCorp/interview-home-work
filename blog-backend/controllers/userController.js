const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng', error });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, password, name, dob } = req.body;
        const newUser = new User({ username, password, name, dob });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo người dùng mới', error });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật người dùng', error });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        res.status(200).json({ message: 'Đã xóa người dùng thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa người dùng', error });
    }
};
