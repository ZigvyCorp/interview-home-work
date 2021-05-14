const express = require('express'); 
const userControllers = require('../controllers/users');


const router = express.Router();
router.post('/',userControllers.createUser);
router.put('/update',userControllers.updateUser);
router.delete('/:id',userControllers.deleteUser);

router.get('/:id',userControllers.getUser);

router.get('/',userControllers.getUsers);

module.exports = router;