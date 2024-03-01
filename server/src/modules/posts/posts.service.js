import logger from "../../common/logger/index.js";
import ServiceResponse from "../../common/response/service.response.js";
import { generateRandomTags } from "../../utils/array.helper.js";
import HttpRequest from "../../helper/request.helper.js";
import config from "../../config/index.js";
import { faker } from "@faker-js/faker";
import moment from "moment";

const httpRequest = new HttpRequest(config.externalBaseUrl);

const getList = async (queryParams = {}) => {
  try {
    const { page, limit, search } = queryParams;

    let posts = await httpRequest.getRequest().get("/posts");
    const users = await httpRequest.getRequest().get("/users");
    const comments = await httpRequest.getRequest().get("/comments");

    // handle pagination
    if (search) {
      posts = posts.filter((post) => {
        console.log(post.title, " - ", search);
        return post.title?.includes(search?.trim()?.toLowerCase());
      });
    }
    const total = posts.length;
    posts = posts.slice((page - 1) * limit, page * limit);

    const data = _serializePost(posts, users, comments);

    return new ServiceResponse(true, "", {
      data,
      page,
      limit,
      total,
    });
  } catch (err) {
    logger.error(err?.message);
    return new ServiceResponse(true, "", []);
  }
};

const getDetail = async (id) => {
  try {
    let postDetail = await httpRequest.getRequest().get(`/posts/${id}`);
    if (!postDetail) {
      return new ServiceResponse(false, "Not Found");
    }
    const users = await httpRequest.getRequest().get("/users/");
    const comments = await httpRequest.getRequest().get(`/posts/${postDetail.id}/comments`);

    const [post] = _serializePost([postDetail], users, comments);
    post.comments = comments?.filter((comment) => comment.postId === post.id);

    return new ServiceResponse(true, "", post);
  } catch (e) {
    logger.error(err);
    return new ServiceResponse(false, e.message);
  }
};

const _serializePost = (posts, users, comments) => {
  return posts.map((post, index) => ({
    ...post,
    tags: generateRandomTags(),
    createdAt: moment(faker.date.past()).format("MMM DD, YYYY"),
    author: users?.find((user) => user.id === post.userId)?.name,
    body: post.body + faker.lorem.paragraphs() + (index % 2 === 0 ? faker.lorem.paragraphs() : ""), // make post longer
    commentCount: comments?.reduce((acc, comment) => acc + (comment.postId === post.id ? 1 : 0), 0),
    comments: comments?.filter((comment) => comment.postId === post.id),
  }));
};

export default {
  getList,
  getDetail,
};
