


import express from 'express';
import {getAuths,createAuth ,loginAuth} from '../controllers/auth.js';

const router = express.Router();


router.get('/',getAuths);
router.post('/register',createAuth);
router.post('/login',loginAuth);

export default router;