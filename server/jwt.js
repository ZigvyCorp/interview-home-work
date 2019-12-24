const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "private-key";

exports.encode = data =>
  new Promise((res, rej) => {
    jwt.sign(JSON.stringify(data), PRIVATE_KEY, function(err, access_token) {
      if (err) {
        rej(err);
      }
      res(access_token);
    });
  });

exports.decode = token =>
  new Promise((res, rej) => {
    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
      if (err) {
        rej(err);
      }
      res(decoded);
    });
  });
