require('dotenv').config();
import { app } from './src/app';
import connectDB from './src/databases/connectDB'

const PORT = process.env.PORT || 3001;

connectDB()

//create server
app.listen(PORT, () => {
    console.log(`Server is connected with port ${PORT}`);
})