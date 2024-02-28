const jwt = require("jsonwebtoken");

// mã hóa
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    userName: user.userName
  };
  const secretKey = "post-api";
  return jwt.sign(payload, secretKey, {
    expiresIn: "24h",
  });
};

module.exports = {
  generateToken,
};
