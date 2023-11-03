const express = require("express");

const {
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getUser
} = require("../controllers/userController");

const router = express.Router()

router.get('/user', getAllUsers)
router.post('/createUser', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)
router.get('/:id', getUser)

module.exports = router