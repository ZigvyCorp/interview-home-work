import mongoose from "mongoose"

const connectToDb = async () => {
  try {
    const url = process.env.URL
    await mongoose.connect(url)
    console.log('Database connect successfully');
  } catch (error) {
    console.log(error);
  }
}

export default connectToDb