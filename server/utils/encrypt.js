const crypto = require("crypto");
const config = require("./../config/config");

async function encryptPassword(password) {
  const cipher = crypto.createCipher(
    config.encryptAlgorithm,
    config.encryptKey
  );
  var encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

module.exports = {
  encryptPassword: encryptPassword,
};
