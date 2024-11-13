const User = require("../models/UserModel");
const bcryptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { username, password, name, dob } = req.body;
  console.log(req.body);

  // Chuyển đổi ngày sinh từ định dạng DD/MM/YYYY sang ISO
  const [day, month, year] = dob.split("/");
  const formattedDob = new Date(`${year}-${month}-${day}T00:00:00Z`); // Chuyển đổi sang định dạng ISO

  try {
    // Kiểm tra xem username đã tồn tại chưa
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Tên tài khoản đã tồn tại" });
    }
    // Mã hóa mật khẩu
    const hashedPassword = await bcryptJs.hash(password, 10);

    // Tạo người dùng mới
    const newUser = new User({
      username,
      password: hashedPassword,
      name,
      dob: formattedDob,
    });

    // Lưu người dùng vào cơ sở dữ liệu
    await newUser.save();
    res
      .status(201)
      .json({ message: "Tạo tài khoản thành công", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to register user", error });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Tìm người dùng bằng username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Người dùng không tìm thấy" });
    }

    // So sánh mật khẩu
    const isMatch = await bcryptJs.compare(password, user.password); // Sử dụng bcryptJs ở đây
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Thông tin đăng nhập không hợp lệ" });
    }

    // Nếu mật khẩu đúng, tạo token JWT
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token hết hạn sau 1 giờ
    );

    res.status(200).json({
      message: "Đăng nhập thành công",
      access_token: token, // Trả token về
    });
  } catch (error) {
    res.status(500).json({ message: "Đăng nhập không thành công", error });
  }
};
