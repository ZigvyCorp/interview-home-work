import { respsonseData } from "../config/response.js";
import {
  createPostService,
  getAllPostService,
  getPostService,
  searchPostService,
} from "../services/postService.js";

export const createNewPost = async (req, res) => {
  try {
    let result = await createPostService(req.body);
    respsonseData(res, "successfully", result, 201);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};

export const getListPost = async (req, res) => {
  try {
    let result = await getAllPostService();
    respsonseData(res, "successfully", result, 200);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};

export const searchPost = async (req, res) => {
  try {
    let result = await searchPostService(req.query);
    respsonseData(res, "successfully", result, 200);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};

export const getPost = async (req, res) => {
  try {
    let result = await getPostService(req.params);
    respsonseData(res, "successfully", result, 200);
  } catch (error) {
    respsonseData(res, "Error...", "", 500);
  }
};
