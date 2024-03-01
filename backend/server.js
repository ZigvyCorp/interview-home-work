require("dotenv").config();
const app = require("./app");
const http = require("http");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

mongoose.connect(process.env.DB_URL).then(() => {
	server.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
});