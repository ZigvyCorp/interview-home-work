const { isString, isNaN } = require("lodash");

module.exports = function isStringNumber(string) {
  return isString(string) && !isNaN(string);
};
