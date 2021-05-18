import express from 'express';
import {getUsers,userByID,findPeople} from '../controllers/user.js';

const router = express.Router();


router.get('/',getUsers);
router.get('/findpeople/:userId',findPeople);
router.param('userId', userByID);
export default router;