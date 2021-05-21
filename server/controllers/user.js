import { User } from "../models/User.js";

export const getUsers = async (req,res) => {
    try {
    
        
        

        const posts = await User.find();
  
    res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};

export const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id).populate('following', '_id name')
        .populate('followers', '_id name')
        .exec()
        if (!user)
          return res.status('400').json({
            error: "User not found"
          })
          console.log(user);
        req.profile = user
        next()
      } catch (err) {
        return res.status('400').json({
          error: "Could not retrieve user"
        })
      }
  }
  
export const findPeople = async (req, res) => {
    const following = req.profile._id;
  
    try {
      let users = await User.find({ _id:  following  })
      .select('username')
      .select('name')
      res.json(users)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }