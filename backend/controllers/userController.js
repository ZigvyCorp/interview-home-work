import User from "../Models/User.js";

export const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log("createUser", userName, email, password);
    if (!userName || !email || !password) {
      return res.status(400).json({
        error: "UserName, email, and password are required fields.",
      });
    }
    const existing_user = await User.findOne({ email: email });
    if (existing_user && existing_user.verified) {
      return res.status(400).json({
        status: "error",
        message: "Email already in use, Please login",
      });
    } else {
      const newUser = await User.create({
        userName,
        email,
        password,
      });

      res.status(201).json({ success: true, data: newUser });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
