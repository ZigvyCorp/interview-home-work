const UserModel = require("./../models/user.model");
const config = require("./config");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  secretOrKey: config.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtStrategy = new JwtStrategy(opts, async function (jwt_payload, done) {
  try {
    let user = await UserModel.findById(jwt_payload.sub);

    done(null, user);
  } catch (error) {
    done(null, error);
  }
});

module.exports = {
  jwtStrategy,
};
