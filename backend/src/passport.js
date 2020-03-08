import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy } from 'passport-jwt'

import User from './models/user'

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username })
      if (!user) {
        return done(null, false, { message: `Username ${username} not found` })
      }

      const isMatch = await user.comparePassword(password)
      if (isMatch) {
        return done(null, user)
      }

      return done(null, false, { message: 'Invalid email or password' })
    } catch (err) {
      done(err)
    }
  }),
)

export default passport
