const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync();
const hashPassword = bcryptjs.hashSync("1304", salt);

let userData = [
  {
    userName: "admin",
    firstName: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    phoneNumber: 123456789,
    password: hashPassword,
    role: "QuanTri",
    avatar: "",
    createdAt: "2021-09-12 00:00:00",
    updatedAt: "2021-09-12 00:00:00",
  },
];

module.exports = { userData };
