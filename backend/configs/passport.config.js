const session = require("express-session");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");
const flash = require("connect-flash");
const MongoDBStore = require("connect-mongodb-session")(session);

module.exports = (app) => {
  // khởi tạo store session để lưu trữ thông tin user
  const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "sessions",
  });

  store.on("error", function (error) {
    console.log("error store on: ", error);
  });

  app.use(
    session({
      secret: process.env.SECERET_SESSION,
      resave: true,
      saveUninitialized: true,
      store: store, // lưu trữ session vào mongodb
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      },
    })
  );

  // hàm được gọi khi xác thực thành công để lưu thông tin user vào session
  passport.serializeUser((user, next) => next(null, user._id));

  // hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
  passport.deserializeUser((id, next) => {
    User.findById(id)
      .then((user) => {
        if (!user) {
          return next(new Error("User not found"));
        }
        return next(null, user);
      })
      .catch((error) => next(error));
  });

  app.use(flash());

  passport.use(
    new LocalStrategy(
      { passReqToCallback: true },
      (req, username, password, next) => {
        User.findOne({ username })
          .then((user) => {
            if (!user) {
              return next(null, false, { message: "Unregistered username" });
            }
            if (!bcrypt.compareSync(password, user.password)) {
              return next(null, false, { message: "Incorrect password" });
            }
            return next(null, user);
          })
          .catch((err) => res.status(500).json(err));
      }
    )
  );

  app.use(passport.initialize()); // middleware được gọi ở từng request, kiểm tra session lấy ra passport.user nếu chưa có thì tạo rỗng
  app.use(passport.session()); // middleware sử dụng kịch bản Passport , sử dụng session lấy thông tin user rồi gắn vào req.user
};
