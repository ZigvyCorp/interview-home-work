const express =require('express');
const router = express.Router();
const UserController = require('../../Controllers/User.controller')

router.post('/',UserController.register);

router.get('/',UserController.getList);

router.get('/:id',UserController.getOne);


router.delete("/:id",UserController.delete);

router.patch("/:id",UserController.editUser);

router.put("/:id",UserController.editUser);

module.exports =router;