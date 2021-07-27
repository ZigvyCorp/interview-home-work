import express from 'express';
import { currentUser, signin, signout, signup, updateUserProfile } from '../controllers/userController.js';
import { getCurrentUser } from '../middleware/current-user.js';

const userRoutes = express.Router();

userRoutes.route('/signup').post(signup);
userRoutes.route('/signin').post(signin);
userRoutes.route('/signout').get(signout);
userRoutes.route('/currentuser').get(getCurrentUser, currentUser);
userRoutes.route('/profile').put(getCurrentUser, updateUserProfile);

export default userRoutes;