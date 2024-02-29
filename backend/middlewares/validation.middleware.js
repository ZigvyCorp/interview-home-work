const { validationResult } = require("express-validator");

function ValidationMiddleware(_req, _res, _next) {
  const result = validationResult(_req);
  if (!result.isEmpty()) {
    return _res.status(400).json({ errors: result.array() });
  }
  _next();
}

module.exports = ValidationMiddleware;