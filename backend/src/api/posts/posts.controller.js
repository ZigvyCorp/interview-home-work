const PostService=require('./posts.service')
const {dbErrors }=require('../../data')

const getPosts = (req,res) => {
    try {
    const posts = PostService.getPosts()
    res.status(200).send({message:'The posts are',data:posts})
    } catch (error) {
    res.status(500).send({message:'Internal Server Error'})
    }
}

const getPost = (req,res) => {
    const {id}=req.params

    try {
        const post = PostService.getPost(+id)
        res.status(200).send({message:'The post is',data:post})
    } catch (error) {
        if (error instanceof dbErrors.NotFound) {
            res.status(404).send({message:error.message})
        }
        res.status(500).send({message:'Internal Server Error'})

    }
}

const getComments = (req,res) => {
    const {id}=req.params

    try {
        const comments = PostService.getComments(+id)
        res.status(200).send({message:'The comments are',data:comments})
    } catch (error) {
        if (error instanceof dbErrors.NotFound) {
            res.status(404).send({message:error.message})
        }
        res.status(500).send({message:'Internal Server Error'})
    }
}

const createPost = (req,res) => {
    const fieldToCreate = req.body

    try {
        const createdPost = PostService.createPost(fieldToCreate)
        res.status(200).send({message:'The created post',data:createdPost})
    } catch (error) {
        res.status(500).send({message:'Internal Server Error'})
    }
}

const updatePost = (req,res) => {
    const {id}=req.params
    const fieldsToUpdate = req.body

    try {
        PostService.updatePost(+id, fieldsToUpdate)
        res.status(200).send({message:'The post has been updated'})
    } catch (error) {
        if (error instanceof dbErrors.NotFound) {
            res.status(404).send({message:error.message})
        }
        res.status(500).send({message:'Internal Server Error'})
    }
}

const deletePost = (req,res)=>{
    const {id}=req.params

    try {
        PostService.deletePost(+id)
        res.status(200).send({message:'The post has been deleted'})
    } catch (error) {
        if (error instanceof dbErrors.NotFound) {
            res.status(404).send({message:error.message})
        }
        res.status(500).send({message:'Internal Server Error'})
    }
}

module.exports ={
    getPosts,
    getPost,
    getComments,
    createPost,
    updatePost,
    deletePost
}