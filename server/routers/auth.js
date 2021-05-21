


import express from 'express';
import {getAuths,createAuth ,loginAuth,logoutAuth} from '../controllers/auth.js';

const router = express.Router();


router.get('/',getAuths);
router.post('/register',createAuth);
router.post('/login',loginAuth);
router.get('/logout',logoutAuth);
export default router;