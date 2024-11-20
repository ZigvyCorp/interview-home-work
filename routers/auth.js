const User = require('../models/user');
const express = require('express');
const router= express.Router();
const asyncHandler = require('express-async-handler')


//  title

router.get('/profile',async function(req, res){
    const profile = await User.findprofile(req.session.userId);
    res.render('auth/profile',{profile});
});
//post profile
router.post('/profile',async function(req, res){
    const {username,email}= req.body;
    await User.Updateinfo(username,email,req.session.userId);
    const profile = await User.findprofile(req.session.userId);
    res.render('auth/profile',{profile});
});
// load login
router.get('/login', function(req, res){
    res.locals.title='Login';
    res.render('auth/login');
});
var content= null;
// post
router.post('/login', function(req, res,next){
    const {username,email,password,token}= req.body;
    User.findByEmail(email).then(function(found){
        if(found && found.password=== password && found.token=== null){
            req.session.userId= found.id;
            res.redirect('/');
        }
        else{
            res.locals.title='Login';
            res.render('auth/login');
        }
    }).catch(next);
    
});
router.get('/:id/:token', asyncHandler(async function(req, res){
    const {id, token}= req.params;
    const user = await User.findById(id);
    if(user && user.token === token){
        user.token=null;
        user.save();
        req.session.userId= user.id;
    }
    res.redirect('/');
}));

router.get('/logout',function(req,res){
    delete req.session.userId;
    res.redirect('/');
})
module.exports= router;