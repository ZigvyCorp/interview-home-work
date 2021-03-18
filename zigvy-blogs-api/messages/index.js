const { ERROR_CODE } = require('./code')

class CoreError {
  constructor(code) {
    this.code = code
    this.message = ERROR_CODE[code]
  }
}

class ResponseMessage {
  static error (res, error) {
    if (error instanceof CoreError) {
      return res.status(400).json({ error })
    }
    return res.status(400).json({ error: new CoreError(400) }) 
  }

  static success(res, data) {
    return res.status(200).json(data)
  }
}

class RequestMessage {
  static parseQuery(query) {
    let { attributes, search, offset, limit, ...where } = query
    attributes = attributes ? attributes.match(/[a-zA-Z]+(?=,?)/g) : undefined 
    if (offset) offset = Number.parseInt(offset)
    if (limit) limit = Number.parseInt(limit)
    return { attributes, where, offset, limit, search }
  }
}

module.exports = {
  CoreError,
  ResponseMessage,
  RequestMessage
}