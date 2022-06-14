const express = require("express");
const config = require("./src/configs/configs");
const bodyParser = require("body-parser");
// TODO mongoose
const mongoose = require("mongoose");
//TODO apollo server
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// TODO connect mongodb
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    console.log("🍀 connected data mongodb ✅");
  })
  .catch((error) => {
    console.log("error data mongodb ❌");
    process.exit(1);
  });

// TODO get(/) and start server
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log(done);
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "590065265733237",
      clientSecret: "9d9cf56f9c7a55698254da8a79d5a9e9",
      callbackURL:
        "https://2b66-14-180-163-156.ngrok.io/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("====================================");
      console.log(profile);
      console.log("====================================");
      return cb(null, profile);
    }
  )
);

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["user_friends", "manage_pages"] })
);
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/get-auth");
  }
);
app.get("/get-auth", (req, res, next) => {
  return res.json(req.user);
});

app.get("/", async (req, res) => {
  const messages =
    "🚀 Express server started on port:  ✅" +
    `${process.env.PORT || 5030}` +
    "🚀 ApolloServer already at http://localhost:5030/graphql ✅ ✅   " +
    "🚀 Server already a http://localhost:5030 ✅ ✅ ✅" +
    "🚀 https://cloud.mongodb.com/v2/60e6cbefc357547a487e82cc#clusters " +
    "🚀 Heroku  : https://tixi-movie-heroku.herokuapp.com/";
  res.json(messages);
});
app.listen(
  {
    port: process.env.PORT || 5030,
  },
  () => {
    console.log(`🚀 Express server started on port: ${config.server.port} ✅ `);
    console.log(
      `🚀 Server already a http://${config.server.hostname}:${config.server.port} ✅ ✅ ✅`
    );
    console.log(
      `🚀 https://cloud.mongodb.com/v2/6069bc834e865c6b1f43a400#metrics/replicaSet/6069bd87ed7de870c1f0ebe8/explorer `
    );
    console.log(`🚀 Heroku  : https://tixi-movie-heroku.herokuapp.com/ `);
  }
);

// tc po
