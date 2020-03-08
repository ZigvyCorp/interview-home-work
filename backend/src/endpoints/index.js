import config from '../config'
import makeEndpoint from '../utils/makeEndpoint'
import commentEndpoints from './comment'
import postEndpoints from './post'
import userEndpoints from './user'

export default {
  index: makeEndpoint(req => config.appName),
  comment: commentEndpoints,
  post: postEndpoints,
  user: userEndpoints,
}
