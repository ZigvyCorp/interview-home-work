import app from "./app.js";
import connectDB from "./config/connectDB.js";

const start = async () => {
	console.log("starting up ...!");
	connectDB();

	app.listen(3001, () => {
		console.log("listening on port 3001!!!!!!!!!");
	});
};
start();
