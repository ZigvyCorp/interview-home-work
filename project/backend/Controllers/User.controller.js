
const User = require('../Models/User.model')
const Counter = require('../Models/Counter.model')

const createError =require('http-errors');
const {userValidate}= require('../helpers/validation')

module.exports ={
    register: async (req,res,next)=> {
        try{
            
            let data =req.body
            
            const {error} = userValidate(data);
            if(error){
                throw createError(error.details[0].message)
            }

           const isExists = await User.findOne({
            username:data.username
           })
           
           if(isExists){
            throw createError.Conflict(`${data.username} is already existed`);
           }

           const counter = await Counter.findOneAndUpdate({name:"users"},{ $inc: { seq: 1 }}, {  new: true})
            data = { ...data, id:counter.seq};
            
           const user =  new User(
                data
           )

           const saveUser = await user.save();
           return res.status(200).json({
                status:'okay',
                elements: saveUser 
           })

        }catch(e){
            next(e);
        };
    },
  
    getList: async (req,res,next)=>{
        try {
            const data = await User.find()
          
            const count = await User.countDocuments();
            res.status(200).json({
                status:'okay',
                elements:data,
                total: count,
            });
            
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req,res,next)=>{
        try {
            const data = await User.findOne({id:req.params.id}).select(	'-password')
          
            
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
            await User.findOneAndDelete({id:req.params.id});
          
            res.status(200).json({
                status:'deleted',
            })
            
        } catch (error) {
            next(error)
        }
    },
    editUser: async(req,res,next)=>{
        try {
            const {username} = req.body
            if(username){
                const isExists = await User.findOne({
                    username
                })
                   
                if(isExists){
                    throw createError.Conflict(`${username} is already existed`);
                }
            }
           const newUser = await User.findOneAndUpdate  ({ id: req.params.id }, req.body, { new: true })
           res.status(200).json({
            status:'okay',
            elements: newUser,
        })
           
            
        } catch (error) {
            next(error)
        }
    },

}