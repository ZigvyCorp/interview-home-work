import { Router } from 'express'
import passport from 'passport'
import HttpStatus from 'http-status-codes'

import endpoints from '../endpoints'
import { validation } from '../middlewares'

const router = Router()

router.post(
  '/signin',
  validation,
  (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        res.status(HttpStatus.OK).json({ success: false, error: info })
      }
      req.user = user
      return next()
    })(req, res, next)
  },
  endpoints.user.signIn,
)

router.post('/signup', validation, endpoints.user.signUp)

export default router
