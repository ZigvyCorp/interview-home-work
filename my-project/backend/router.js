var post = require("./controller/posts");
var user = require("./controller/users");

function setRouter(router, database) {
  router.post("/signin", function(req, res) {
    sessions = req.session;
    var user_name = req.body.email;
    var password = req.body.password;
    user
      .validateSignIn(user_name, password, database)
      .then(result => {
        if (result) {
          sessions.username = user_name;
          return res.send("success");
        }
      })
      .catch(err => {
        return res.status(500).json({ error: err.toString() });
      });
  });

  router.post("/signup", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    if (name && email && password) {
      user
        .signup(name, email, password, database)
        .then(result => {
          return res.send(result);
        })
        .catch(err => {
          return err.status(500).json({ err: err.toString() });
        });
    }
  });

  router.post("/posts/create", function(req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;
    const createAt = req.body.createAt;

    post
      .addPost(title, content, tags, createAt, database)
      .then(result => {
        return res.send(result);
      })
      .catch(error => {
        return res.status(500).json({ error: error.toString() });
      });
  });

  router.get("/posts", function(req, res) {
    post
      .getPosts(database)
      .then(result => {
        return res.send(result);
      })
      .catch(err => {
        console.log("errorr", err);
        return res.status(500).json({ error: err.toString() });
      });
  });
}

module.exports = setRouter;
