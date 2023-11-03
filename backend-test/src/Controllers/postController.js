import { errCode, successCode } from "../Configs/response.js";
import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";

const models = initModels(sequelize);

const getAllPost = async (req, res) => {
  try {
    const data = await models.Posts.findAll();
    successCode(res, data, "Get user success");
  } catch (err) {
    errCode(res, "Backend error");
  }
};

const getAllPostId = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await models.Posts.findAll({
      where: { userId },
    });
    if (data) {
      successCode(res, data, "Post by UserId");
    } else {
      failCode(res, "", "User have no post");
    }
  } catch (err) {
    errCode(res, "Backend error");
  }
};

export { getAllPost, getAllPostId };
