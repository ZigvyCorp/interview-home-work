import express from 'express';
import userController from '../controllers/userController';

const userRoute = express.Router();

// add new user
userRoute.post('/', userController.insertUser);
// get all user
userRoute.get('/all', userController.getAll);
// get all user
userRoute.delete('/delete/:userId', userController.deleteUser);
// get detail user
userRoute.get('/:userId', userController.getDetail);
// update user
userRoute.put('/:userId', userController.updateUser);

export default userRoute;