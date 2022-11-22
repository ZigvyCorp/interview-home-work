const express = require('express')

const router = express.Router()
const userController = require('../controllers/userController')

/**
 * @swagger
 * /api/user/register:
 *  Create:
 *    tags: [User]
 *    summary: Create new user
 *    description: create new user
 *    responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
 router.post('/users/register', userController.register)


/**
 * @swagger
 * /api/user/login:
 *  post:
 *    tags: [User]
 *    summary: Login.
 *    description: Login
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                required: true
 *              password:
 *                type: string
 *                required: true
 * 
 *    responses:
 *      '200':
 *        description: A successful response
 *      400:
 *        description: Bad request
 *      403:
 *        description: forbidden
 */
  router.post('/users/login', userController.login)

 module.exports = router