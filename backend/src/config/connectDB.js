import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://blog:blog@cluster0.4mhvd.mongodb.net/blog',
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			})

		console.log(`connected: ${conn.connection.host}`)
	} catch (error) {
		console.error(`error: ${error.message}`);
		process.exit(1)
	}
}
export default connectDB;