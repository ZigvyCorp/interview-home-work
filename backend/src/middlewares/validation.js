import config from '../config'
import Schemas from '../validationSchemas'

export default (req, res, next) => {
  const { body, query, params, method, baseUrl, path } = req
  let route = `${method} ${baseUrl}`
  if (path !== '/') {
    route = `${route}${path}`
  }
  const schema = Schemas[route]

  if (schema) {
    const { value, error } = schema.validate({ body, query, params }, config.joiValidationOptions)
    if (error) {
      error.route = route
      next(error)
    }

    if (typeof value === 'object') {
      Object.keys(value).forEach(key => (req[key] = value[key]))
    }
    next()
  } else {
    next()
  }
}
