const fetch = require('node-fetch');
const {mock_url} = require('../const/config')
const getAllcomment = async (req,res)=>{
    const response = await fetch(mock_url+"/comments");
    const comments = await response.json();
    console.log(comments)
    const newcomments = comments.map((comment,i) =>{
        return {
            "id": comment.id,
            "owner": Math.floor(Math.random() * 10) + 1,
            "post": comment.postId,
            "content": comment.body,
            "created_at": (new Date()).getTime() - i*1000*60*60
          }
    })
    return res.json(newcomments)
}

const getcommentWithID = async (req,res)=>{
    const {postId} = req.query
    const response = await fetch(mock_url+"/comments?postId="+postId);
    const comments = await response.json();
    if(comments.length === 0){
        return res.status(404).send('API not found');
    }
    const newcomments = comments.map((comment,i) =>{
        return {
            "id": comment.id,
            "owner": Math.floor(Math.random() * 10) + 1,
            "post": comment.postId,
            "content": comment.body,
            "created_at": (new Date()).getTime() - i*1000*60*60
          }
    })
    return res.json(newcomments)
}

const getComments = (req,res) =>{
    const {postId} = req.query
    if(postId){
        getcommentWithID(req,res)
    }
    else{
        getAllcomment(req,res)
    }
}
module.exports = {
    getComments
}