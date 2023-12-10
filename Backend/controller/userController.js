const db = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserController {
  index = (req, res) => {
    res.send("User Controller");
  };

  login = async (req, res) => {
    const { userName, password } = req.body;
    try {
      if (!userName || !password) {
        return res.status(422).json({
          success: false,
          message: "",
          data: "",
        });
      }

      const account = await db.User.findOne({
        where: {
          userName: userName,
        },
      });

      if(!account) {
        return res.status(404).json({
          success: false,
          message: `Account doesn't exist`,
          data: "",
        });
      }
      const pass = await bcrypt.compare(password, account.password);
      if (!pass)
        return res.status(425).json({
          success: false,
          message: 'Wrong password',
          data: "",
        });
      const accessToken = jwt.sign(
        { userId: account.userId },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "365d",
        }
      );

      res.cookie("authToken", accessToken, { httpOnly: true, secure: true });
      res.status(200).json({
        success: true,
        message: "",
        data: accessToken,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  };

  getCurrentUser = async (req, res) => {
    const { userId } = req
    try {
      let user = await db.User.findByPk(userId, {
        attributes: ['name']
      })

      res.status(200).json({
        success: true,
        message: '',
        data: user
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  }

  getSuggestUser = async (req, res) => {
    const userId = req.userId;
    try {
      const users = await db.User.findAll({
        where: {
          userId: {
            [Op.ne]: userId,
          },
        },
        limit: 5,
      });
      res.status(200).json({
        success: true,
        message: "Successfully get data",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  };
}

module.exports = new UserController();
