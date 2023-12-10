const { sequelize } = require('../models')

const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('Authenticating')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb