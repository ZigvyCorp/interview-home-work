const cmtService = require("./../services/comment");

const config = require("./../config/config");

async function insert(req, res) {
  try {
    const owner = req.userId;
    const { post, content } = req.body;
    if (!post || !content) {
      return res
        .status(config.status_code.FORBIDEN)
        .send({ message: "missing field" });
    }
    let cmtDoc = cmtService.createModel({
      owner,
      post,
      content,
      created_at: new Date().getTime(),
    });
    await cmtService.insert(cmtDoc);
    return res.status(config.status_code.OK).send({ result: cmtDoc });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function getAll(req, res) {
  try {
    const cmtDocs = await cmtService.getAllInfor();
    return res.status(config.status_code.OK).send({ result: cmtDocs });
  } catch (error) {
    console.log(error);
    res.status(config.status_code.SERVER_ERROR).send({ message: error });
  }
}

async function getByPostId(req, res){
    try {
        const {postId} = req.query
        if(!postId){
            return res.status(config.status_code.FORBIDEN).send({message: "post doesn't exist"})
        }
        const cmtDocs = await cmtService.findBy(
            {
                post: postId
            },{
                populate: {path: "owner", select: "name username"}
            }
        )
        return res.status(config.status_code.OK).send({result: cmtDocs})
    } catch (error) {
        console.log(error);
        res.status(config.status_code.SERVER_ERROR).send({ message: error });
    }
}

module.exports = {
    insert, 
    getAll,
    getByPostId,
}