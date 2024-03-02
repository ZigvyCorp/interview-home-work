import express from 'express'
import authCtrl from '../controllers/authCtrl'
import { validRegister } from '../middleware/vaild'
import auth from '../middleware/auth'

const router = express.Router()

router.post('/register', validRegister, authCtrl.register)


router.post('/login', authCtrl.login)

router.get('/logout', auth, authCtrl.logout)

router.get('/refresh_token', authCtrl.refreshToken)



export default router;