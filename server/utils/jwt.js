const jwt = require("jsonwebtoken");
const config = require("./../config/config");

module.exports = {
  signToken: signToken,
  verifyToken: verifyToken,
  signDevice: signDevice,
  verifyDevice: verifyDevice,
  verifyTypeDevice: verifyTypeDevice,
};

function signToken(_id) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      _id,
      config.jwtKey,
      { algorithm: config.algorithm, expiresIn: "365d" },
      function (error, token) {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.jwtKey,
      { algorithms: config.algorithm },
      function (error, decoded) {
        if (error) return reject(error);
        return resolve(decoded);
      }
    );
  });
}

function signDevice(obj) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      obj,
      config.jwtDeviceKey,
      { algorithm: config.algorithm },
      (error, token) => {
        if (error) return reject(error);
        return resolve(token);
      }
    );
  });
}

function verifyDevice(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.jwtDeviceKey,
      { algorithm: config.algorithm },
      (error, decoded) => {
        if (error) return reject(error);
        return resolve(decoded);
      }
    );
  });
}

function verifyTypeDevice(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.jwtTypeKey,
      { algorithm: config.algorithm },
      (error, decoded) => {
        if (error) return reject(error);
        return resolve(decoded);
      }
    );
  });
}
