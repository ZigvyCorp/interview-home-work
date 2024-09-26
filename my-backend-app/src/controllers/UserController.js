const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { username, password, name, dob } = req.body;

  // Chuyển đổi ngày sinh từ định dạng DD/MM/YYYY sang ISO
  const [day, month, year] = dob.split("/");
  const formattedDob = new Date(`${year}-${month}-${day}T00:00:00Z`); // Chuyển đổi sang định dạng ISO
  console.log("req: ", req.body);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      name,
      dob: formattedDob, // Sử dụng ngày đã được định dạng
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to register user", error });
  }
};
