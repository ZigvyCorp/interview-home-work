"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const http = (0, http_1.createServer)(app);
app.use(express_1.default.json({ limit: "40mb" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
exports.io = new socket_io_1.Server(http);
exports.io.on("connection", (socket) => {
    socket.on("joinRoom", (id) => {
        socket.join(id);
        console.log(socket.id + "connect");
    });
    socket.on("outRoom", (id) => {
        socket.leave(id);
    });
    socket.on("disconnect", () => {
        console.log(socket.id + "is disconnect");
    });
});
app.use("/api", routes_1.default);
const URI = process.env.mongo_url;
mongoose_1.default
    .connect(`${URI}`, {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
})
    .then(() => {
    console.log("connect success to mongodb 🍃");
})
    .catch((err) => {
    throw err;
});
const port = 6030;
http.listen(port, () => {
    console.log(`Server is run on port 🚀 ${port}`);
});
