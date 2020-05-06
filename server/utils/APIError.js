exports.APIError = function(message, code = 500, more = null) {
  let result = {
    message: message,
    code: code
  };
  if (more) {
    result['moreInfo'] = more;
  }
  return result;
};

exports.APIErrors = function(error) {
  let errors = [];
  errors.push(error);
  return {
    error: errors
  };
};
