const comment = require('../models/comment.model')
const { findAllPost, findPostById } = require('../models/repo/post.repo')
const User = require('../models/user.model')
const axios = require('axios')

const createComment = async (userId, { postId, body }) => {
  const foundUser = await User.findOne({ _id: userId })
  const foundPost = await findPostById(postId)
  if (!foundUser || !foundPost) {
    throw new Error('Please try again later')
  }
  const foundCommentsAPI = await axios.get('https://jsonplaceholder.typicode.com/comments')
  const sortComment = await foundCommentsAPI.data.sort((a,b)=> b.id - a.id)[0].id


  const foundCommentdb = await comment.findOne().sort('-_id').exec()
  if(!foundCommentdb){
    const newComments = comment.create({
      _id: sortComment + 1,
      postId: postId,
      name: foundUser.name,
      email: foundUser.email,
      body: body,
    })
    return newComments
  }else{
    const newComments = comment.create({
      _id: foundCommentdb._id > sortComment  ? foundCommentdb._id + 1 : sortComment + 1,
      postId: postId,
      name: foundUser.name,
      email: foundUser.email,
      body: body,
    })
    return newComments
  }
}

module.exports = {
  createComment,
}
