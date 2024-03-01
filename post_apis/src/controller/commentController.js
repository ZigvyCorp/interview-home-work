import { respsonseData } from "../config/response.js";
import { addCommentService, getCmtByPostService } from "../services/commentService.js";

export const createComment = async (req, res) => {
  try {
    let result = await addCommentService(req.body);
    respsonseData(res, "successfully", result, 201);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};

export const getCmtByPost = async (req, res) => {
  try {
    let { postId } = req.query;
    let result = await getCmtByPostService(postId);
    respsonseData(res, "successfully", result, 200);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};
