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
     const user = await User.findOne({ usename: req.body.username });
     !user && res.status(404).json("user not found");

     var buf1 = Buffer.from(req.body.password);
        var buf2 = Buffer.from(user.password);
     const validPassword = await buf1.equals(buf2); 
     !validPassword && res.status(404).json("wrong password");
    
 
     res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};