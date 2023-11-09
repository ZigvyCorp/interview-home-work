import express from "express";
import dbConnect from './config/dbConnect'
import initRoutes from "./routes/api"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path";
import { Server } from "socket.io";



require("dotenv").config()

const app = express();
const port = process.env.PORT || 8888

app.use(cors({ origin: process.env.CLIENT_URL, methods: ['POST', 'GET', 'DELETE', 'PUT'], credentials: true }))


app.use(cookieParser())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
dbConnect()

initRoutes(app)

const server = app.listen(port, () => {
    console.log("server runningg.....");
})

// socket
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
    },
});

let activeUsers = []

io.on("connection", (socket) => {
    // add new User
    socket.on("new-user-add", (newUserId) => {
        // if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({ userId: newUserId, socketId: socket.id });
        }
        // send all active users to new user
        io.emit("get-users", activeUsers);
    });

    socket.on("disconnect", () => {
        // remove user from active users
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        // send all active users to all users
        io.emit("get-users", activeUsers);
    });

    // send message to a specific user
    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        if (user) {
            io.to(user.socketId).emit("recieve-message", data);
        }
    });
});