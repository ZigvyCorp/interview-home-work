module.exports = (req, res, next) => {
  console.log('[INFO]: Through Authentication Middleware..')
  next()
}