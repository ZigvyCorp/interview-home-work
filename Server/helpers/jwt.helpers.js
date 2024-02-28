const jwt = require("jsonwebtoken");

// mã hóa
const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const secretKey = "movie-api";
  const token = jwt.sign(payload, secretKey, {
    expiresIn: "24h",
  });
  return token;
};

module.exports = {
  generateToken,
};
