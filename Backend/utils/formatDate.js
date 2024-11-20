const moment = require('moment')

const formatDate = function(date) {
    return moment(date).utcOffset("+07:00").format('DD-MM-YYYY');
}

module.exports = {
    formatDate,
}