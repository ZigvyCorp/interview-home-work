import User from "../models/userModel.js";

const findAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in getUserProfile: ", error.message);
  }
};

export {
    findAllUser
  };