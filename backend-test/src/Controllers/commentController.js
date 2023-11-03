import { errCode, successCode } from "../Configs/response.js";
import sequelize from "../Models/index.js";
import initModels from "../Models/init-models.js";

const models = initModels(sequelize);

const getAllComment = async (req, res) => {
  try {
    const data = await models.Comments.findAll();
    successCode(res, data, "Get all comment success");
  } catch (err) {
    errCode(res, "Backend error");
  }
};

const getAllCommentId = async (req, res) => {
    try {
      const { postId } = req.params;
      const data = await models.Comments.findAll({
        where: { postId },
      });
      if (data) {
        successCode(res, data, "Comment by PostId");
      } else {
        failCode(res, "", "Post have no comment");
      }
    } catch (err) {
      errCode(res, "Backend error");
    }
  };

export { getAllComment, getAllCommentId };
