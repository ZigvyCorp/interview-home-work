const { User } = require("../model/index");

const login = async ({ username, password }) => {
  let existingUser = await User.findOne({ username: username });
  if (existingUser && password == existingUser.password) {
    console.log("Login user in user repository");
    const { username, name } = existingUser;
    return { username, name };
  } else {
    console.log("Wrong Username or Password");
  }
};

const addUser = async ({ username, password, name, dob, created_at }) => {
  try {
    let existingUser = await User.find({
      username: username,
    });
    if (existingUser.plain == 0) {
      console.log("Existing Member Please Login");
    } else {
      await User.create({
        username: username,
        password: password,
        name: name,
        dob: dob,
        created_at: created_at,
      });
      console.log(`Registered user with name ${name}`);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; //! Re-throw the error to handle it in the calling code
  }
};

const getALlUser = async () => {
  try {
    listRs = await User.find({}).select("-password -username");
    return listRs;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getALlUser, addUser, login };
