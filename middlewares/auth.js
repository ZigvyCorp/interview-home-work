const User= require('../models/user');

module.exports= function auth(req,res, next){
    const {userId}= req.session;
    res.locals.currentUser=null;
    if(userId){
        User.findById(userId).then(function(user){;
        if(user){
            req.currentUser=user;
            res.locals.currentUser=user;
        }
        next();
    }).catch(next);
    }
    else{
        next();
    }
    
};