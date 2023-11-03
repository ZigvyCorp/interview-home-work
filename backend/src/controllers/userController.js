const User= require("../models/UserModel");
const Post=require("../models/PostModel");
const userController = { 
    //ADD USER
    addUser: async(req, res)=> {
        try{
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }catch(err){
            res.status(500).json(err);
        }
    },

    getAllusers: async(req, res)=>{
        try{
            const user = await User.find();
            res.status(200).json(user);
        }catch(err)
        {
            res.status(500).json(err);
        }
    },
    getUser: async(req, res)=>{
        try{
            if(req.body.userId){
                const user = await User.find({userId: req.body.userId})
                res.status(200).json(user);
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    updateUser: async(req,res)=>{
        try{
            if(req.body.userId){
                const user = User.find({userId: req.body.userId})
                await user.updateOne({$set: req.body});
            }
            
            res.status(200).json("Update successfully");
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser: async(req, res)=>{
        try{
            if(req.body.userId){
                
            await Post.updateMany({userId: req.body.userId},{$set: {userId: 0}});
            await User.findOneAndDelete({userId: req.body.userId});
            }
            res.status(200).json("delete successfully");
        }catch(err){
            res.status(500).json(err);        
        }
    }
};
module.exports= userController;