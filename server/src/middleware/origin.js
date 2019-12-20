const util   = require('../helpers/util')
const domain = require('./domain')

module.exports = {
    origin: function(origin, callback) {
        if (! util.isProduction()) {
            callback(null, true)
        } else if (domain.has(origin)) {
            callback(null, true)
        } else {
            callback('Access denied!!!', false)
        }
    }
}
