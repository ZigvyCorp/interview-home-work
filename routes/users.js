const express = require('express');
const data = require('../data/users.json')

const router = express.Router();

router.get('/',(req,res) => {
  res.json(data);
})
router.get('/:id',(req,res) => {
  res.json(data[req.params.id-1]);
})
module.exports = router