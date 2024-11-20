'use strict';
const config = require('../../config/config').getConfig();

module.exports.hiddenButton = (a, b) => {
    if(a == config.AUTHOR_ACCOUNT_STATUS.PENDING && b == config.MANAGER_ACCOUNT_STATUS.ALL_PEDDING_AUTHOR){
        return 'hidden';
    }
}

module.exports.hiddenAccessAuthorButton = (a) => {
    if(a == config.MANAGER_ACCOUNT_STATUS.ALL_USER){
        return 'hidden';
    }
}

module.exports.hiddenChart = (a) => {
    if(a.trim() === config.CHART_STATUS.FOR_YEAR){
        return 'hidden';
    }
}