const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyAccessToken = asyncHandler(async (req, res, next) => {
  // Bearer dasdasdas
  // headers: { authorization: Bearer token}
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        // loi 401 la khong xac thuc
        return res.status(401).json({
          sucess: false,
          mess: "Invalid access token",
        });
      }

      // decode là cái mà mình hash ví dụ ở đây là cái userId, role
      //   console.log(decode);
      req.user = decode;
      next();
    });
  } else {
    return res.status(401).json({
      sucess: false,
      mes: "Require authentication!!!",
    });
  }
});

// const isAdmin = asyncHandler(async (req, res, next) => {
//   const { role } = req.user;
//   if (role !== "admin") {
//     // throw new Error('You must be an admin')
//     return res.status(401).json({
//       sucess: false,
//       mes: "Require admin role !!!",
//     });
//   }
//   next();
// });

module.exports = {
  verifyAccessToken,
  // isAdmin,
};
