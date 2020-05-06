const comments = require('./data/comments.json');
const posts = require('./data/posts.json');
const users = require('./data/users.json');

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json())

app.get('/api/get_user_list', (req, res) => {
    res.json(users)
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);