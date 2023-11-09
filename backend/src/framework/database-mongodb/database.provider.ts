import * as mongoose from "mongoose";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        "mongodb+srv://doadmin:rR0J35Z71VWio928@db-mongodb-sgp1-76973-464ced0f.mongo.ondigitalocean.com/C300AMG?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-76973"
      ),
  },
];
