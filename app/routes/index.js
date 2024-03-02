var express = require('express');
var router = express.Router();

router.use('/comments', require('./comments'))
router.use('/posts', require('./posts'))
router.use('/users', require('./users'))

module.exports = router;
