const fs = require('fs').promises;
const { format } =  require('date-fns');
const path = require('path');

const fileName = path.join(__dirname, '../logs', 'errorLogs.log');

const logErrors = (id, url, method, msg) => {
    const dateTime = format(new Date(), 'dd-MM-yyyy\tHH:mm:ss');
    const contentLog = `${id}---${dateTime}---${url}---${method}---${msg}\n`;
    try {
        fs.appendFile(fileName, contentLog);
    } catch (error) {
        console.error(error);
    };
};

module.exports = {
    logErrors,
};
