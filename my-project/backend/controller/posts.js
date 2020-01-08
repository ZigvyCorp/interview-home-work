function addPost(title, content, tags, createAt, db) {
  return new Promise((resolve, reject) => {

    const collection = db.collection("post");
    collection.insertOne({
      title: title,
      content: content,
      tags: tags,
      createAt: createAt
    },
    function(err, result) {
      if (err) {
        reject(err);
        return;
      }
      resolve(result.ops[0]);
    });
  });
}
function getPosts(db) {
  return new Promise((resolve, reject) =>{

    const collection = db.collection("post");
    collection.find().toArray(function(err, list) {
      if(err){
        reject(err)
        return;
      }
      resolve(list);
    });
  })
}

module.exports = { addPost, getPosts };
