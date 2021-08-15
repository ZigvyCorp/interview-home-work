const User = require('../models/user');
const Email = require('../models/email');
const express = require('express');
const crypto=require('crypto');
const router= express.Router();
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler')

//  title

// load login
router.get('/', function(req, res){
    res.locals.title='Home';
    res.render('/');
});

router.get('/register', function(req, res){
    res.locals.title='Register';
    const mss= " ";
    const suscess=" ";
    res.render('auth/register',{mss, suscess});
});
// post
router.post('/register',[
    body('email').isEmail().normalizeEmail().custom(async function (email){
        const found = await User.findByEmail(email);
        if(found)
        {
            throw Error('User exits');
        }
        return true;
    }),
    body('username').trim().notEmpty(),
    body('password').isLength({min: 6}),
],asyncHandler (async function(req,res){
    const errors = validationResult(req);
    var mss = "Email exits";
    var suscess=" ";
    if (!errors.isEmpty()) {
       
      return res.status(422).render('auth/register',{mss,suscess})}
      const user = await User.create({
        email: req.body.email,
        username:req.body.username,
        password: req.body.password,
        token: crypto.randomBytes(3).toString('hex').toUpperCase()
      });

      // send mail
      await Email.send(user.email, 'Mã kích hoạt tài khoản', `${process.env.BASE_URL}/auth/${user.id}/${user.token}`)
      suscess = "Suscess!!! Please check mail";
      mss=" ";
      res.render('auth/register',{suscess,mss});

}));


module.exports= router;