const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;
const mock_url = process.env.MOCK_URL || "https://jsonplaceholder.typicode.com"
module.exports = {
    port,
    mock_url
}