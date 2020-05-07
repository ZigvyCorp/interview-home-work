const comments = require('./data/comments.json');
const posts = require('./data/posts.json');
const users = require('./data/users.json');

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json())

app.get('/api/get_data', (req, res) => {
  res.json({ userList: users, postList: posts, commentList: comments })
});

app.post('/api/authenticate', (req, res) => {
  const filteredUserList = users.filter(user => user.username == req.body.username && user.password == req.body.password)
  if (filteredUserList.length > 0) {
    res.json({ userId: filteredUserList[0].id })
  } else {
    res.json({ userId: null })
  }
});

app.post('/api/submit_reply', (req, res) => {
  const id = Math.max.apply(Math, comments.map(comment => { return comment.id; })) + 1
  const today = new Date();
  const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  const comment = {
    id: id,
    owner: req.body.owner,
    post: req.body.postId,
    content: req.body.content,
    created_at: date
  }
  comments.unshift(comment)
  res.json(comment);
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);