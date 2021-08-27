const userService = require("./../services/user");
const config = require("./../config/config");
const encrypt = require("./../utils/encrypt");
const jwtToken = require("./../utils/jwt");

async function signIn(req, res) {
  try {
    let { username, password } = req.body;
    const userDocument = await userService.findOneBy(
      { username: username },
      " "
    );
    if (!userDocument)
      return res
        .status(config.status_code.NOT_FOUND)
        .send({ message: config.status_message.NOT_FOUND });
    // password = await encrypt.encryptPassword(password);
    if (userDocument["password"] != password)
      return res
        .status(config.status_code.FORBIDEN)
        .send({ message: "wrong password" });

    let user = Object.assign({}, userDocument);
    delete user._doc.password;
    const token = await jwtToken.signToken(
      userDocument.adminId
        ? { id: userDocument.adminId, subuserId: userDocument._id }
        : { id: userDocument._id }
    );
    return res
      .status(config.status_code.OK)
      .send({ result: user._doc, token: token });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function signUp(req, res) {
  try {
    let { username, password, name, dob } = req.body;

    if (!username || !name || !password) {
      return res
        .status(config.status_code.FORBIDEN)
        .send({ message: "missing field" });
    }
    if(!dob){
      dob = ""
    }
    // encode user password
    let userDocument = await userService.findOneBy({ username: username });
    if (userDocument)
      return res
        .status(config.status_code.FORBIDEN)
        .send({ message: "user is existed" });

    // password = await encrypt.encryptPassword(password);
    const newUserDocument = userService.createModel({
      username,
      password,
      name,
      dob,
      created_at: new Date().getTime(),
    });
    await userService.insert(newUserDocument);

    return res.status(config.status_code.OK).send({ result: newUserDocument });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

module.exports = {
  signIn,
  signUp,
};
