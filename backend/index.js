const express = require('express');
const app = express();

app.use("/user", require('../backend/routes/user'));
app.use("/post", require('../backend/routes/post'));
app.use("/comment", require('../backend/routes/comment'));
app.use("/login", require('../backend/routes/login'));

app.listen(3001, () => {
    console.log('listening on port');
});