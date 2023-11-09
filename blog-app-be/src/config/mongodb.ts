import mongoose from "mongoose";

export default function initMongoDB() {
	const mongoURL = process.env.MONGO_URL || "";
	return mongoose.connect(mongoURL, {
		retryWrites: true,
		w: "majority",
		dbName: "blog-app",
	});
}
