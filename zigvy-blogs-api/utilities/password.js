const bcrypt = require('bcrypt')

module.exports.hashPashword = (password) => {
  return bcrypt.hash(password, 10)
}

module.exports.checkPassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}