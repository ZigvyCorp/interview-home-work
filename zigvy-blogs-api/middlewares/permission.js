module.exports = (permission) => (req, res, next) => {
  console.log(`[INFO]: Through Permission Middleware with required permission is '${permission}'`)
  next()
}