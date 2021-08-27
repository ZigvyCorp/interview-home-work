const postService = require("./../services/post");

const config = require("./../config/config");

async function insert(req, res) {
  try {
    const owner = req.userId;
    const { title, content, tags } = req.body;
    if (!title || !content || !tags) {
      return res
        .status(config.status_code.FORBIDEN)
        .send({ message: "missing field" });
    }
    let postDoc = postService.createModel({
      owner,
      title,
      content,
      created_at: new Date().getTime(),
      tags,
    });
    await postService.insert(postDoc);
    return res.status(config.status_code.OK).send({ result: postDoc });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function getAllPost(req, res) {
  try {
    const postDocs = await postService.getAllInfor();
    return res.status(config.status_code.OK).send({ result: postDocs });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function getPostById(req, res) {
  try {
    const { postId } = req.query;
    const postDoc = await postService.findBy(
      {
        _id: postId,
      },
      {
        populate: { path: "owner", select: "name username" },
      }
    );
    return res.status(config.status_code.OK).send({ result: postDoc });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function getPostByKey(req, res) {
  try {
    let { key, data } = req.query;
    console.log("1");
    if (key == "all" && data == "all") {
      key = null; data = null
    }
    const postDoc = await postService.findBy(
      {
        [key]: data,
      },
      {
        populate: { path: "owner", select: "name username" },
        sort: {created_at: -1}
      }
    );
    return res.status(config.status_code.OK).send({ result: postDoc });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function updateById(req, res) {
  try {
    const { postId, title, content, tags } = req.body;
    await postService.updateById(postId, {
      title: title,
      content: content,
      tags: tags,
    });
    return res.status(config.status_code.OK).send({ result: true });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function deleteById(req, res) {
  try {
    const { postId } = req.query;
    await postService.deleteById(postId);
    return res.status(config.status_code.OK).send({ result: true });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

module.exports = {
  insert,
  getAllPost,
  getPostById,
  getPostByKey,
  updateById,
  deleteById,
};
