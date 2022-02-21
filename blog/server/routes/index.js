const express = require('express');
const router = express.Router();
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes')
const userRoutes = require('./userRoutes')
router.get('/', function (req, res, next) {
    return res.json({ message: 'Welcome to homepage' });
});

router.use("/posts",postRoutes)
router.use("/comments",commentRoutes)
router.use("/users",userRoutes)
module.exports = router;