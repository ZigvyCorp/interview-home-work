const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//Midlleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/', require('./routes/post.router'));

//Connect MongoDB
const URI = process.env.MONGO_URL;
mongoose.connect(
	URI,
	{
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) => {
		if (err) throw err;
		console.log('Connect to MongoDB successful');
	}
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});
