const mongoose = require('mongoose');

const connect = () => {
    return new Promise((resolve,reject) => {
            mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(() => {
                console.log('Database is connected');
                resolve();
            }).catch(err => {
                console.log(err);
                reject(err)
            })
    });
}

module.exports = {
    connect
};
