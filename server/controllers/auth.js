import { User } from "../models/User.js";

export const getAuths = async (req,res) => {
    try {
    
        
        

        const posts = await User.find();
  
    res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};

export const createAuth = async (req,res) => {
    try {
 
     const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,


      });

     const post = new User(newUser);
     await post.save();   
     res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};

export const loginAuth = async (req,res) => {
    try {

     let user = await User.findOne({
           
            "username" : req.body.username
          })

          if (!user)
          return res.status('401').json({
            error: "User not found"
          })



     var buf1 = Buffer.from(req.body.password);
        var buf2 = Buffer.from(user.password);
     const validPassword = await buf1.equals(buf2); 

     if (!validPassword)
     return res.status('401').send({
        error: "username and password don't match."
      })

   
     
 
     res.status(200).json({user: {_id: user._id, name: user.name}});
    } catch (err) {
        res.status(500).json({ error : err});
    }
};
export const logoutAuth = async (req,res) => {
    try {

        res.clearCookie("t")
        return res.status('200').json({
          message: "signed out"
        })
     
 
        } catch (err) {
        res.status(500).json({ error : err});
    }
};
