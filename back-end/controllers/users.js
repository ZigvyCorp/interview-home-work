const User = require('../models/User')

const getAllUser = async(req,res) => {
    try {
        const users = await User.find({})

        res.status(200).json({ users })

    } catch (error) {
        res.status(500).json({ msg: error })
    }}

const getOneUser = async(req,res) => {
    try {
        const {id:userId} = req.params
        const user= await User.findOne({id: userId})

        if(!user){
            return res.status(404).json({msg: `No user with id: ${userId}`})
        }

        res.status(200).json({user})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports={
    getAllUser,
    getOneUser
}