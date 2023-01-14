const bcrypt = require('bcrypt')

SALT_WORK_FACTOR = 10;

const hashPassword = async (password) => {
    const hashedCode = await bcrypt.hash(password, SALT_WORK_FACTOR);
    return hashedCode
}

module.exports = { hashPassword }