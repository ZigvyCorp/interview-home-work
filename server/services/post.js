const post = require("./../collections/post");

const basicCRUDGenerator = require("./basicCRUD");
const postCRUD = basicCRUDGenerator(post);
module.exports = {
  ...postCRUD,
  getAllInfor,
};

function getAllInfor(){
  return new Promise((resolve, reject) => {
    post.find().populate({ path: "owner", select: "name username"}).exec((error, docs) => {
      if(error) return reject(error)
      return resolve(docs)
    });
  });
}
