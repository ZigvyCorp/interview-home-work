import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.query.accessToken;
  if (!token) return next(createError(401, "Bạn không có quyền!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token này không đúng!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
