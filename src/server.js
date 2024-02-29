import app from "./app.js";
import connectDB from "./db/connect.js";

const port = +process.env.PORT || 3000;

const startServer = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => console.log(`Server is listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

startServer();
