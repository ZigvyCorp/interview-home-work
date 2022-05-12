const express = require('express')
const router = express.Router()

const User = require('../schemas/User');

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
    // Check username exits
    const checkUserExits = await User.findOne({username: req.body.username}).exec();
    if(checkUserExits !== null){
      throw Error("Username is exits")
    }

    // Hash Password



    const user = new User(req.body);
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
 *     summary: Sign-up
 *     tags: [User]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: The user logins successfully
 *       500:
 *         description: Some server error
 */

router.post("/sign-in", async (req, res) => {
  console.log("123123");
  res.status(500).send();
});

module.exports = router