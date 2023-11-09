
const Post = require('../Models/Post.model')
const Counter = require('../Models/Counter.model')

const createError =require('http-errors');
const {postValidate}= require('../helpers/validation')

module.exports ={
    getList: async (req,res,next)=>{
        try {
            // const data = await Post.find()
          
            // const count = await Post.countDocuments();
            // res.status(200).json({
            //     status:'okay',
            //     elements:data,
            //     total: count,
            // });
            const pageIndex = parseInt(req.query.pageIndex);
            const pageSize = parseInt(req.query.pageSize);
            const skipIndex = (pageIndex - 1) * pageSize;
        
            const title = req.query.title || "";
        
            const queryObj = {
              ...req.query,
              ...(title && {
                title: { $regex: title, $options: "i" },
              })
            };
            const excludedFields = ["pageIndex", "pageSize"];
            excludedFields.forEach((el) => delete queryObj[el]);
        
            
            const data = await Post.find(queryObj)
                .limit(pageSize)
                .skip(skipIndex)
                .exec();
            const count = await Post.countDocuments(queryObj);
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
            
            const {error} = postValidate(data);
            if(error){
                throw createError(error.details[0].message)
            }


           const counter = await Counter.findOneAndUpdate({name:"posts"},{ $inc: { seq: 1 }},  { new: true })
            data = { ...data, id:counter.seq};
         
           const post =  new Post(
                data
           )

           const savePost = await post.save();
           return res.status(200).json({
                status:'okay',
                elements: savePost 
           })

        }catch(e){
            next(e);
        };
    },
  
    
    getOne: async (req,res,next)=>{
        try {
            const data = await Post.findOne({id:req.params.id})
          
            
            res.status(200).json({
                status:'okay',
                elements:data,
            });
            
        } catch (error) {
            next(error)
        }
    },
    delete: async(req,res,next)=>{
        try {
            await Post.findOneAndDelete({id:req.params.id});
          
            res.status(200).json({
                status:'deleted',
            })
            
        } catch (error) {
            next(error)
        }
    },
    editPost: async(req,res,next)=>{
        try {
            
           const newPost = await Post.findOneAndUpdate  ({ id: req.params.id }, req.body, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newPost,
        })
           
            
        } catch (error) {
            next(error)
        }
    },

}