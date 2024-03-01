import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const auth =
    req.headers.authorization || req.headers.Authorization || req.cookies.token;

  if (
    !auth ||
    auth == "" ||
    (!Array.isArray(auth) && !auth.startsWith("Bearer"))
  ) {
    res.status(401).json({
      message: "unauthorization",
    });
  } else {
    const accessToken = Array.isArray(auth)
      ? auth[0].split(" ")[1]
      : auth.split(" ")[1];
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        const error = err.toString();
        if (error.includes("expired")) {
          res.status(401).json({
            message: "token expire",
          });
        } else {
          res.status(401).json({
            message: "unauthorization",
          });
        }
      } else {
        req.body.userId = decoded.userId;
        req.body.role = decoded.role;
        next();
      }
    });
  }
};
