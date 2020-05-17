var express = require('express');
var UserService = require('../../../services/user/user');

const router = express.Router();

router.post('/create', function(req, res, next) {
    const {
        username,
        password,
        name,
        dob,
    } = req.body;
    const reqObj = {
        username,
        password,
        name,
        dob,
    };
    new UserService().createNewUser(reqObj).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.post('/login', function(req, res, next) {
    const {
        username,
        password,
    } = req.body;
    const reqObj = {
        username,
        password,
    };
    new UserService().login(reqObj).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.get('/detail/:id', function(req, res, next) {
    const { id } = req.params;
    new UserService().getUserDetail(id).then((r) => {
        res.json({
            data : r,
        });
    }).catch((e) => {
        res.json({
            error : e,
        });
    });
});

router.put('/update/:id', function(req, res, next) {
    const { id } = req.params;
    const {
        username,
        password,
        name,
        dob,
    } = req.body;
    const reqObj = {
        idUpdate: id,
        username,
        password,
        name,
        dob,
    };
    new UserService().updateUser(reqObj).then((r) => {
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