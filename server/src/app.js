const express = require('express')
const port = process.env.PORT
const userRouter = require('./routers/user')
const postRouter = require('./routers/post')
const commentRouter = require('./routers/comment')
const cors       = require('cors')
// const origin     = require('./middleware/origin')
// const domain     = require('./middleware/domain')
require('./db/db')

const app = express()
//app.use(cors(origin))
app.use(cors({
    optionsSuccessStatus: 200,
}))
app.use(express.json())
app.use(userRouter)
app.use(postRouter)
app.use(commentRouter)



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})