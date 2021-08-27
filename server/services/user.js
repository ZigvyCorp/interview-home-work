const user = require("./../collections/user");

const basicCRUDGenerator = require("./basicCRUD");
const userCRUD = basicCRUDGenerator(user);
module.exports = {
  ...userCRUD,
};

