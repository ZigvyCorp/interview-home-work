"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: () => mongoose.connect("mongodb+srv://doadmin:rR0J35Z71VWio928@db-mongodb-sgp1-76973-464ced0f.mongo.ondigitalocean.com/C300AMG?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-76973"),
    },
];
//# sourceMappingURL=database.provider.js.map