const UserModel = require('../Models/UserModel');
const { verifyToken } = require('./AuthController');

async function getUser(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json('No such user exists');
    }
  } catch (error) {
    res.status(500).json('error');
  }
}

async function createUser(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const username = req.params.username;

  try {
    const user = await UserModel.findOne({ username });

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails._id);
    } else {
      res.status(404).json('No such user exists');
    }
  } catch (error) {
    res.status(500).json('error');
  }
}

async function getAllUser(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  try {
    const userList = await UserModel.find({});

    if (userList.length > 0) {
      const newUserList = userList.map((user) => {
        const { password, ...otherDetails } = user._doc;
        return otherDetails;
      });

      res.status(200).json(newUserList);
    } else {
      res.status(404).json('No such user exists');
    }
  } catch (error) {
    res.status(500).json('error');
  }
}

async function updateUser(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }

  const id = req.params.id;

  const { _id } = req.body;

  if (id === _id) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json('error');
    }
  } else {
    res.status(403).json('Access Denied! you can only update your own profile');
  }
}

async function deleteUser(req, res) {
  if (!verifyToken(req)) {
    return res.status(401).json('Token expired');
  }
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = res.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json('User deleted successfully');
    } catch (error) {
      res.status(500).json('error');
    }
  } else {
    res.status(403).json('Access Denied! you can only delete your own profile');
  }
}

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
  createUser,
};
