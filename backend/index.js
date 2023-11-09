const app = require("./src/app");
const config = require("./src/configs");
const PORT = config.app.port;
const server = app.listen(PORT, () => {
    console.log("Server  at port " + PORT);
});
process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server exists");
        process.exit();
    });
});
