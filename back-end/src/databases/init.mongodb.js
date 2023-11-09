const mongoose = require('mongoose');

const create_connection = (uri) => {
    const db = mongoose.createConnection(uri);
    db.on("error", function (err) {
        console.log(
            `Mongodb :: connection ${this.name} ${JSON.stringify(err)}`
        );
        db.close().catch(() =>
            console.log(
                `Mongodb:: Failed to close connection with ${this.name}`
            )
        );
    });

    db.on("connected", function () {
        console.log(`Mongodb :: connection ${this.name}`);
    });

    db.on("disconnected", function (err) {
        console.log(
            `Mongodb :: connection ${this.name} ${JSON.stringify(err)}`
        );
    });

    return db;
};

const connectionDB = create_connection(`${process.env.MONGO_URI}`);

module.exports = connectionDB