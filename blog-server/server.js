require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const { mockData } = require("./app/services/mock-data.service");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: just a demo so we will allow all connection
app.use(
	cors({
		origin: "*",
	})
);

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/json");
	next();
});

require("./app/routes/posts.routes")(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);

	mockData()
		.then((success) => {
			if (success) console.log("Mock data inserted successfully.");
		})
		.catch((err) => console.log("Mock data failed", err));
});
