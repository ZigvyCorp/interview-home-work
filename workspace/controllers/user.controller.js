import User from '../models/user.model.js';

// Get all Users
export const getAllUsers = async (req, res, next) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// Get a single User by ID
export const getUserById = async (req, res, next) => {
    try {
        const item = await User.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        next(error)
    }
};

// Create a new User
export const createUser = async (req, res, next) => {
    try {
        const newItem = new User(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        next(error);
    }
};

// Update a User by ID (PUT)
export const updateUserById = async (req, res, next) => {
    try {
        const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Partially update a User by ID (PATCH)
export const patchUserById = async (req, res, next) => {
    try {
        const updatedItem = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error)
    }
};

// Delete a User by ID
export const deleteUserById = async (req, res, next) => {
    try {
        const deletedItem = await User.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error)
    }
};
