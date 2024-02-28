const jwt = require("jsonwebtoken");
const { RESPONSE_CODE } = require("../constants");
const { getTimeStampSecond } = require("../utils/date");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("AccessToken");
    const secretKey = "movie-api";

    const decode = jwt.verify(token, secretKey);
    if (decode.exp < getTimeStampSecond()) {
      return res
        .status(RESPONSE_CODE.FORBIDDEN)
        .send("Phiên làm việc hết hạn vui lòng đăng nhập lại");
    }
    const { id, userName, email, role } = decode;
    req.user = { id, userName, email, role };
    next();
  } catch (error) {
    res
      .status(RESPONSE_CODE.BAD_REQUEST)
      .send("Vui lòng đăng nhập để tiếp tục");
  }
};

const authorize =
  (...arrRole) =>
  (req, res, next) => {
    const { user } = req;
    const { role } = user;
    const index = arrRole.findIndex((_role) => _role === role);
    if (index === -1)
      return res
        .status(RESPONSE_CODE.FORBIDDEN)
        .send("Bạn không thể thực hiện chức năng này");
    next();
  };

module.exports = {
  authenticate,
  authorize,
};
