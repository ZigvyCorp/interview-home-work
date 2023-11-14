import mongoose from 'mongoose';
import 'dotenv/config';

export const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log('DB Connected!');
  } catch (err) {
    console.log(`DB Connection Error: ${err.message}`);
  }
};
