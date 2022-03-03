const {axiosServer} = require("../config.js");

const getAllComments = async (req,res) =>{ 
    try {
        const response = await axiosServer.get('/comments');
        const arrayComments = response.map((cmt)=>{
            return {
                id: cmt.id,
                owner: cmt.name,
                post: cmt.postId,
                content: cmt.body,
                created_at: Date.now(),
            }
        })
        res.status(200).json(arrayComments);

    } catch (error) {
        res.status(404).send('not found!');
    }
}

const getCommentById = async (req,res) =>{ 
    try {
        const query = req.query;
        const response = await axiosServer.get(`/comments?postId=${query.postId}`);
        const arrayComments = response.map((cmt)=>{
            return {
                id: cmt.id,
                owner: cmt.name,
                post: cmt.postId,
                content: cmt.body,
                created_at: Date.now(), 
            }
        })
        res.status(200).json(arrayComments);

    } catch (error) {
        res.status(404).send('not found!');
    }
}

module.exports.getComments = (req,res,next) => {
    if(req.query.postId){
        getCommentById(req,res);
    } else {
        console.log('hello');
        getAllComments(req,res);
    }
}

