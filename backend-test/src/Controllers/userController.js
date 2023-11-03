import { errCode, failCode, successCode } from "../Configs/response.js";
import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";

const models = initModels(sequelize);

const getAllUser = async (req, res) => {
  try {
    const data = await models.Users.findAll();
    successCode(res, data, "Get all user success");
  } catch (err) {
    errCode(res, "Backend Error");
  }
};

const getAllUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await models.Users.findAll({
      where: { id },
    });
    if (data) {
        successCode(res, data, "Get user by ID success");
    } else {
        failCode(res, "", "User is not exist");

    }
  } catch (err) {
    errCode(res, "Backend error");
  }
};

export { getAllUser, getAllUserId };
