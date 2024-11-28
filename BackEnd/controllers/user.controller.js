
import User from '../models/users.model.js'

export const getUserData = async (req , res) => {
    try {
        const usersData = await User.find()

        return res.status(200).json({
            data : usersData
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error,
          });
    }
}