const express = require('express')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController')
const { logIn, signUp, changePass } = require('../controllers/authController')
const { verifyToken, checkDuplicateUserName } = require('../middlewares/authMiddleware')

const userRouter = express.Router()

// Login, signup, changePass
userRouter.post('/login', logIn)
userRouter.post('/signup', checkDuplicateUserName, signUp)
userRouter.put('/changePass', verifyToken, changePass)
// Crud
userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.put('/:userId', verifyToken, updateUserById)
userRouter.delete('/:userId', verifyToken, deleteUserById)

module.exports = userRouter