const Comment = require("../model/comments");
const jsonTemplate = require("../lib/lib")

class commentController{
  async get(req, res, next) {
    await Comment.find()
      .then((post) => {
        res
          .status(200)
          // .json({ status: 200, data: post, errorMessage: "" });
          .json(jsonTemplate.jsonValue(200, post, ""));
      })
      .catch((error) => {
        res
          .status(200)
          //   .json({ status: 400, data: null, errorMessage: error.message });
          .json(jsonTemplate.jsonValue(400, null, error));
      });
  }
}

module.exports = new commentController();
