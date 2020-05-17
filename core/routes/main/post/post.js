var express = require('express');
var PostService = require('../../../services/post/post');

const router = express.Router();

router.post('/getAllPost', function(req, res, _throw) {
    new PostService().getAllPost(req.body).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.post('/createPost', function(req, res, _throw) {
    new PostService().createPost(req.body).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.put('/updatePost/:id', function(req, res, _throw) {
    const { id } = req.params;
    const {
        title, content, tags,
    } = req.body;
    const reqObj = {
        idUpdate: id,
        title,
        content,
        tags,
    };
    new PostService().updatePost(reqObj).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.delete('/deletePost/:id', function(req, res, _throw) {
    const { id } = req.params;
    new PostService().deletePost(id).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

module.exports = router;