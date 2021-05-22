const express = require('express')
const {router} =require('../api')

module.exports =[
  express.json(),
  express.urlencoded({extended:true}),
  router
]