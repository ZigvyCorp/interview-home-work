'use strict';
const mongoose = require('mongoose');

const {
  db: { host, name, password },
} = require('../configs/config-mongodb');

const username = encodeURIComponent(host);
const pass = encodeURIComponent(password);
const connectionString = `mongodb+srv://${username}:${pass}@cluster0.2ujc3tr.mongodb.net/${name}?retryWrites=true&w=majority`;

// Singleton connect database
class Database {
  constructor() {
    this.connect();
  }

  // connect to the database function
  async connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    } // debug for dev

    await mongoose
      .connect(connectionString)
      .then((_) => console.log(`Connected to MongoDB with host: ${host}`))
      .catch((error) =>
        console.log(`Failed to connect to MongoDB with error: ${error}`)
      );
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;
