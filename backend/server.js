const app = require("./src/app");
const dotenv = require("dotenv");
dotenv.config();
const {app:{port}} = require("./src/configs/config");
const PORT = port;


const sever = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", () => {
    sever.close(()=>{
        console.log("Server closed");
        process.exit(1);
    })
})