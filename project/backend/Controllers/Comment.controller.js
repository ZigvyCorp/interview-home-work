
const Comment = require('../Models/Comment.model')
const Counter = require('../Models/Counter.model')

const createError =require('http-errors');
const {commentValidate}= require('../helpers/validation')

module.exports ={
    getList: async (req,res,next)=>{
        try {
            const data = await Comment.find()
                                
          
            const count = await Comment.countDocuments();
            res.status(200).json({
                status:'okay',
                elements:data,
                total: count,
            });
            
        } catch (error) {
            next(error)
        }
    },

    add: async (req,res,next)=> {
        try{
            
            let data =req.body
            
            const {error} = commentValidate(data);
            if(error){
                throw createError(error.details[0].message)
            }


           const counter = await Counter.findOneAndUpdate({name:"comments"},{ $inc: { seq: 1 }},  { new: true })
            data = { ...data, id:counter.seq};
         
           const comment =  new Comment(
                data
           )

           const saveComment = await comment.save();
           return res.status(200).json({
                status:'okay',
                elements: saveComment 
           })

        }catch(e){
            next(e);
        };
    },
  
  
    delete: async(req,res,next)=>{
        try {
            await Comment.findOneAndDelete({id:req.params.id});
          
            res.status(200).json({
                status:'deleted',
            })
            
        } catch (error) {
            next(error)
        }
    },
    editComment: async(req,res,next)=>{
        try {
            
           const newComment = await Comment.findOneAndUpdate  ({ id: req.params.id }, req.body, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newComment,
        })
           
            
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req,res,next)=>{
        try {
            const data = await Comment.findOne({id:req.params.id})
                                        .populate("owners")
                                        .populate("posts")
            
            res.status(200).json({
                status:'okay',
                elements:data,
            });
            
        } catch (error) {
            next(error)
        }
    },
    getListByPostId: async (req,res,next)=>{
        try {
            const qry = {post:req.params.pid}
            const data = await Comment.find(qry)
                                        .populate("owners")
                                        
            const count = await Comment.countDocuments(qry);
            res.status(200).json({
                status:'okay',
                elements:data,
                total: count,
            });
            
        } catch (error) {
            next(error)
        }
    },
  
}