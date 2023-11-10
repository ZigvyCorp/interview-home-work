const createHttpError = require('http-errors')

/** @type {import('express').ErrorRequestHandler} */
const handleExceptions = (err, req, res, next) => {
  console.log(err)
  if (err instanceof createHttpError.HttpError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: 'Internal error' })
}

module.exports = handleExceptions
