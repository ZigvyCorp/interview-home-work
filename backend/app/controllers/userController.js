import User from '../models/userModel.js';

class UserController {
    // Get all users
    static async getUsers(req, res) {
        try {
            const users = await User.getAllUsers();
            if (!users.length) {
                return res.status(404).json({ message: "No users found" });
            }
            return res.json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    // Get user by ID
    static async getUser(req, res) {
        try {
            const user = await User.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    // Create a new user
    static async createUser(req, res) {
        try {
            const newUser = await User.createUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    // Update an existing user
    static async updateUser(req, res) {
        try {
            const updatedUser = await User.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    // Delete a user
    static async deleteUser(req, res) {
        try {
            const deletedUser = await User.deleteUser(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(deletedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

export default UserController;
