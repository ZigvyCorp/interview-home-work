'use strict'
const express = require('express')
const { asyncHandler } = require('../../helpers/asyncHandler')
const commentController = require('../../controllers/comment.controller')
const routes = express.Router()


routes.post('/', asyncHandler(commentController.createComment))
routes.delete('/:id', asyncHandler(commentController.deleteComment))
routes.patch('/', asyncHandler(commentController.updateComment))

module.exports = routes