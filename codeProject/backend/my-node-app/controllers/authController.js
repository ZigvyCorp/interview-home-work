const User = require("../models/User");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem các trường được cung cấp hay không
  if (!username || !password) {
    res
      .status(400)
      .json({ message: "Vui lòng cung cấp tên đăng nhập và mật khẩu" });
    return;
  }
  // Tìm người dùng trong cơ sở dữ liệu
  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    if (!user) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    // Compare the provided password with the stored password
    const isPasswordValid = password == user.password;

    if (isPasswordValid) {
      // Password is valid

      // Tạo token
      const token = jwt.sign({ username }, "your-secret-key");
      res.json({ message: "Login successful", token: token, user: user });
    } else {
      // Invalid password
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

const register = (req, res) => {
  // Xử lý logic đăng kí
  // Lấy thông tin từ req.body (tên đăng nhập, mật khẩu, email, v.v.)
  const { username, password, email } = req.body;

  // Kiểm tra thông tin và tạo tài khoản mới nếu hợp lệ
  // ...

  // Trả về kết quả
  res.json({ message: "Đăng kí thành công" });
};

module.exports = {
  login,
  register,
};
