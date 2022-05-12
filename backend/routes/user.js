const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const User = require('../schemas/User');

const { generateAccessToken, authenticateToken } = require('../tools/jwt')

/**
 * @swagger
 * /sign-up:
 *   post:
 *     summary: Sign-up
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user registers successfully
 *       500:
 *         description: Some server error
 */

router.post("/sign-up", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (password.length < 6 || password.length > 12) {
      throw Error("Password is not valid");
    }

    // Check username exits
    const checkUserExits = await User.findOne({ username: username }).exec();
    if (checkUserExits !== null) {
      throw Error("Username is exits")
    }

    const user = new User(req.body);

    // Hash Password
    user.password = bcrypt.hashSync(user.password, 10);

    // set Create At
    user.create_at = (new Date()).getTime();

    await user.save();
    res.send(user);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
});

/**
 * @swagger
 * /sign-in:
 *   post:
 *     summary: Sign-in
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *               username:       
 *                 type: string
 *               password:    
 *                 type: string
 *              required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUserExits = await User.findOne({ username: username }).exec();
    if (checkUserExits === null) {
      throw Error("Username or Password is not correct")
    }
    if (bcrypt.compareSync(password, checkUserExits.password) === false) {
      throw Error("Username or Password is not correct")
    }

    res.send(checkUserExits);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});


/**
 * @swagger
 * /get-jwt-token:
 *   post:
 *     summary: Get JWT token
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *               username:       
 *                 type: string
 *               password:    
 *                 type: string
 *              required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.post("/get-jwt-token", async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkUserExits = await User.findOne({ username: username }).exec();
    if (checkUserExits === null) {
      throw Error("Username or Password is not correct")
    }
    if (bcrypt.compareSync(password, checkUserExits.password) === false) {
      throw Error("Username or Password is not correct")
    }

    res.send(generateAccessToken({
      _id: checkUserExits._id,
      username: checkUserExits.username,
      name: checkUserExits.name,
      dob: checkUserExits.dob,
      create_at: checkUserExits.create_at
    }));
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
});

/**
 * @swagger
 * /user:
 *   put:
 *     summary: Update Profile
 *     tags: [User]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *               password:    
 *                 type: string
 *               name:       
 *                 type: string
 *               dob:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user registers successfully
 *       500:
 *         description: Some server error
 */

 router.put("/user", authenticateToken ,async (req, res) => {
  try {
    const { password, name, dob } = req.body;
    if (password.length < 6 || password.length > 12) {
      throw Error("Password is not valid");
    }

    const user = await User.findById(req.user._id);

    user.overwrite({ 
      username: user.username,
      password:  bcrypt.hashSync(password, 10),
      name: name,
      dob: dob,
      create_at: user.create_at
    });
    await user.save();
    res.send(user);
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
});


module.exports = router