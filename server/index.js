const express = require("express")
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv")

const morgan = require("morgan")
const postRoute = require('./routes/postRoute')
const userRoute = require('./routes/userRoute')
const commentRoute = require('./routes/commentRoute')

dotenv.config();


mongoose.connect(process.env.MONGO_URL
).then(() => console.log("DBConnection Successfull!")).catch((err) => (console.log(err)))

app.use(express.json())
app.use(morgan("dev"))

app.use('/api/post', postRoute)
app.use('/api/user', userRoute)
app.use('/api/comment', commentRoute)

app.get("/api/test", () => {
    console.log("test is successfull")
})

app.listen(process.env.PORT, () => {
    console.log("backend sever is running")
})