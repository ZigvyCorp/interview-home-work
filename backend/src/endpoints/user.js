import makeEndpoint from '../utils/makeEndpoint'
import { generateToken } from '../utils/helpers'
import User from '../models/user'

export default {
  signIn: makeEndpoint(async req => ({
    profile: req.user,
    accessToken: generateToken({ id: req.user._id }),
  })),
  signUp: makeEndpoint(async req => {
    const { username, password } = req.body

    const user = new User({ username, password })

    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return { message: 'Account with that username already exists.' }
    }

    await user.save()

    return {
      profile: user,
      accessToken: generateToken({ id: user._id }),
    }
  }),
}
