var express = require('express');
var CommentService = require('../../../services/comment/comment');

const router = express.Router();

router.post('/addNewComment', function(req, res, _throw) {
    new CommentService(req).addNewComment(req.body).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.put('/updateComment/:id', function(req, res, _throw) {
    const { id } = req.params;
    const {
        content,
    } = req.body;
    const reqObj = {
        idUpdate: id,
        content,
    };
    new CommentService().updateComment(reqObj).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.delete('/deleteComment/:id', function(req, res, _throw) {
    const { id } = req.params;
    new CommentService().deleteComment(id).then((r) => {
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