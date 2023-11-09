const { Sequelize } = require("sequelize");
const config = require("../configs");

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        this.sequelize = new Sequelize(
            config.db.name,
            config.db.username,
            config.db.password,
            {
                host: config.db.host,
                port: config.db.port,
                dialect: "postgres",
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000,
                },
            }
        );

        this.sequelize
            .authenticate()
            .then(() => {
                console.log("DB connected");
            })
            .catch((err) =>
                console.error("Unable to connect to the database:", err)
            );
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instance = Database.getInstance();

module.exports = instance;
