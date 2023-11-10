import mongoose from "mongoose";

const URL = process.env.MONGOOSEDB;

mongoose
	.connect(`${URL}`, {
		// useCreateIndex: true,
		// useFindAndModify: false,
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Database connected`);
	})
	.catch((error: string) => {
		console.log(`db error`, error);
	});
