const comment = require("./../collections/comment");

const basicCRUDGenerator = require("./basicCRUD");
const cmtCRUD = basicCRUDGenerator(comment);
module.exports = {
  ...cmtCRUD,
  getAllInfor,
};

function getAllInfor() {
  return new Promise((resolve, reject) => {
    comment
      .find()
      .populate({ path: "owner", select: "name username" })
      .exec((error, docs) => {
        if (error) return reject(error);
        return resolve(docs);
      });
  });
}
