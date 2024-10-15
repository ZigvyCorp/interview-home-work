const User = require("../models/user");
const shortId = require("shortid"); //used to generate random user id when a user signs up
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt"); //this will help to check if the JWT has expired or is it still valid?
const { OAuth2Client } = require("google-auth-library");
const { errorHandler } = require("../helpers/dbErrorHandler");
const sgMail = require("@sendgrid/mail");
const _ = require("lodash"); //utilitized library

//Appl SendGridMail
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }

    const { username, email, password, dob } = req.body;
    let id = shortId.generate();
    let newUser = new User({ id, email, password, username });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: "Signup Error",
        });
      }
      res.json({
        message: "SignUp Success! Please SignIn.",
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    //check if user exists
    if (err || !user) {
      res.status(400).json({
        error: "User with that email does not exist. Please signUp",
      });
    }

    //authenticate
    if (!user.authenticate(password)) {
      res.status(400).json({
        error: "Email and Password do not match.",
      });
    }

    //generate a JSON web token that will have a userID and a secret
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, { expiresIn: "1d" }); //we add the token in the cookie
    const { id, username, name, email, dob } = user;
    return res.json({
      token,
      user: { id, username, name, email, dob },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token"); //when the user signsout we want to clear the cookie called "token"
  res.json({
    message: "Signout success.",
  });
};

// this is our middleware and it will protect us against signed out users accessing pages that we want only signedin users to access
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.auth.id;

  User.findById({ id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found!",
      });
    }

    // req.profile = user;
    next();
  });
};

// exports.adminMiddleware = (req, res, next) => {
//   const adminUserId = req.auth._id;

//   User.findById({ _id: adminUserId }).exec((err, user) => {
//     if (err || !user) {
//       return res.status(400).json({
//         error: "User not found!",
//       });
//     }
//     //to check if he is admin
//     if (user.role !== 1) {
//       return res.status(400).json({
//         error: "Admin resource. Access denied!",
//       });
//     }
//     req.profile = user;
//     next();
//   });
// };

exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_RESET_PASSWORD, {
      expiresIn: "10m",
    });

    // email
    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Password reset link`,
      html: `
            <p>Please use the following link to reset your password:</p>
            <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `,
    };
    // populating the db > user > resetPasswordLink
    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.json({ error: errorHandler(err) });
      } else {
        sgMail.send(emailData).then((sent) => {
          return res.json({
            message: `Email has been sent to ${email}. Follow the instructions to reset your password. Link expires in 10min.`,
          });
        });
      }
    });
  });
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
exports.googleLogin = (req, res) => {
  const idToken = req.body.tokenId;
  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response) => {
      // console.log(response)
      const { email_verified, name, email, jti } = response.payload;

      //If verified check whether that user existed in DB or not
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            // console.log(user)
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
              expiresIn: "1d",
            });
            res.cookie("token", token, { expiresIn: "1d" });
            const { id, email, name, dob, username } = user;
            return res.json({
              token,
              user: { id, email, name, dob, username },
            });
          } else {
            let id = shortId.generate();
            let profile = `${process.env.CLIENT_URL}/profile/${username}`;
            let password = jti;
            user = new User({ id, name, email, dob, username, password });
            user.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: errorHandler(err),
                });
              }
              const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
              });
              res.cookie("token", token, { expiresIn: "1d" });
              const { id, email, name, dob, username } = data;
              return res.json({
                token,
                user: { id, email, name, dob, username },
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: "Google login failed. Try again.",
        });
      }
    });
};
