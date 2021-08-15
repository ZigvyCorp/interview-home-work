const express = require('express');
const router= express.Router();

router.get('/login', function(req, res){
    res.send('User login page');
});

module.exports= router;