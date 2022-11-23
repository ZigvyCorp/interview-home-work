const jwt = require("jsonwebtoken");
const moment = require("moment");
const config = require("../config/config");
const tokenTypes = require("../utils/constants/tokenTypes");

/**
 * @param  {} userId
 * @param  {} expires
 * @param  {} type
 * @param  {} secret=config.SECRET
 * @param  {userId} 
 * @param  {moment.unix(} iat
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = config.SECRET) => {
  console.log(moment.unix(), expires.unix(),);
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };

  return jwt.sign(payload, secret);
};
/**
 * @param  {} token
 * @returns {Promise<payload>}
 */
const verifyToken = async (token) => {
  const payload = jwt.verify(token, config.SECRET);
  return payload;
};
/**
 * @param  {} user
 * @returns {Promise<Object>}
 */
const generateAuthToken = async (user) =>{
  const accessTokenExpires = moment().add(config.JWT_ACCESS_EXPIRATION_MINUTES,"minutes");
  const accessToken = generateToken(user._id, accessTokenExpires, tokenTypes.ACCESS);

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate()
    },

  }

}

module.exports = {
  generateToken,
  verifyToken,
  generateAuthToken
};
