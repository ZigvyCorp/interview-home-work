const Users = require('../models/usersModel');

const usersControllers={
    getUsers :async (req,res)=>{
        try {
            const users  = await Users.find({});
            if(!users) return res.status(400).json({msg:"User does not exits"});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({msg: "lỗi"})
        }
    },
    createUser :async (req,res)=>{
        try {
            const newUser = req.body;
            const user = await Users(newUser);
            await user.save();

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    updateUser :async (req,res)=>{
        try {
            const updateUser = req.body;
            const user = await Users.findOneAndUpdate({_id:updateUser._id},updateUser,{ new:true });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    deleteUser :async (req,res)=>{
        try {
            const idUser = req.params.id;
            await Users.findOneAndDelete({_id:idUser});

            res.status(200).json({msg:"delete Success!"});
        } catch (error) {
            res.status(500).json({msg: error})
        }
    },
    getUser :async (req,res)=>{
        try {
            const idUser = req.params.id;
            const user = await Users.findById(idUser);

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({msg: error})
        }
    }
}

module.exports = usersControllers;