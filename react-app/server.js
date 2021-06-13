const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

app.use('/api/hello', require('./routes/usersRoute'));



app.listen(port, () => console.log(`Listening on port ${port}`));