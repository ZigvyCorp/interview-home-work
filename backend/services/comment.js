const Comment = require("../models/comment");

 const apiGetCommentByPostId = async (id) => {
   try {
     const allComment = await Comment
       .find()
       .select('_id Post id name email body')

     let data = allComment.map((comment) => {
         if(comment.id == id) {
             return {
                 _id: comment._id,
                 name: comment.name,
                 email: comment.email,
                 body: comment.body
             }
         }
     }).filter(item => item)
     data = {
         id,
         comments: data
     }
     if (!data) {
       res.status(404).json({ error: 'No document found' })
       return;
     }

     res.json({data});
   } catch (error) {
     res.status(500).json({ error: error });
   }
 };

 module.exports = {apiGetCommentByPostId}; 