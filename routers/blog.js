
const User= require('../models/user');
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const express = require("express");
const router= express.Router();
const Blog = require('../models/blog');
const multer  = require('multer');
const Comment = require('../models/comment');
//router.use(ensureLoggedIn);
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/image/blog');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload= multer({
    storage: storage,
    onFileUploadStart: function(file) {
        console.log(file.originalname + ' is starting ...')
    },
});
//get blogs by user
router.get('/', async function(req, res,next){
    const blog= await Blog.findAllBlogs();
    res.render('blog/form',{blog});
    next();
});
router.post('/',upload.single('fHinhRap'), async function(req, res,next){
    const idmax = await Blog.onemax();
    let idm = idmax.map((item) => item.max);
    console.log(idm)
    const { title,tags,date,discripe,content } = req.body;
    console.log(title)
    console.log(tags)
    console.log(date)
    console.log(discripe)
    console.log(content)
    
    var path = null;
     if (req.file) {
        path = req.file.originalname;
    }
    console.log(path)
    await Blog.addBlog(idm[0] + 1, title,tags,date,discripe,content,path,req.currentUser.id);         
    const blog= await Blog.findAllBlogs();
    res.render('blog/form',{blog});
    next();
});
// xóa blog
router.get('/:id/done', async function(req, res,next){
    const{ id}=req.params;
    const blog = await Blog.findById(id);
    if(blog ){
        await Blog.deleteblog(id);
    }
    res.redirect('/blog');
    next();
});

router.get('/:idblog', async function(req, res,next){
    const{ idblog}=req.params;
    const detail = await Blog.findAllBlog(idblog);
    const comment = await Comment.findAllComment(idblog);
    const Cmttotal = comment[0].dataValues.commentCount;
    const allcomment = await Comment.UserComment(idblog);
    console.log(allcomment);
    
    res.render('blog/detailblog',{detail, Cmttotal,allcomment});
});
router.post('/:idblog', async function(req, res,next){
    if(!req.currentUser){
        res.redirect('/auth/login');
    }
    else{
        const{ idblog}=req.params;
        const contentpost = req.body.content;
        var datetime = new Date();
        var date = datetime.toISOString().slice(0,10);
        await Comment.addComment(contentpost,date,req.currentUser.id,idblog);
        const comment = await Comment.findAllComment(idblog);
        const Cmttotal = comment[0].dataValues.commentCount;
        const allcomment = await Comment.UserComment(idblog);
        const detail = await Blog.findAllBlog(idblog);
        res.render('blog/detailblog',{detail,Cmttotal,allcomment});
    }
    
   
});


module.exports= router;