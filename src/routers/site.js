const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
// home page
router.get('/', siteController.home);
module.exports = router;
