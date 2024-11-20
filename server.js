const express = require('express');
/* I used ES6 module  for Node first but it lead to some ridiculous errors so I have to revert back to commonJS */
// import fetch from require('node-fetch) 
const app = express();

app.set('port',process.env.PORT || 5000 );

// serves static assets in production
if( process.env.NODE_ENV === "production"){
  app.use(express.static("build"));
}

app.get('/api/test', async (req,res) => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await response.json();
  // res.json(data);
});

app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments',require('./routes/comments'));
app.use('/api/users',require('./routes/users'));
app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
})