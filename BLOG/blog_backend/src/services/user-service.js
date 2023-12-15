const { userModel } = require("../models");

(function () {
  const user = userModel; 

  exports.createUser = function (data, callback) {
    user.create(data).then(
      (response) => {
        callback(null, response);
      },
      (error) => {
        callback(error, null);
      }
    );
  };

  exports.findByEmail = function (query, callback) {
    return user.findOne(query).exec();
  };

  exports.updateUserById = function (id, data, callback) {
    user.findByIdAndUpdate(
      {
        _id: id,
      },
      data,
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.updateUser = function (query, data, options, callback) {
    user.findOneAndUpdate(query, data, options, (err, response) => {
      callback(err, response);
    });
  };

  exports.deleteUser = function (query, callback) {
    user.deleteOne(query, callback);
  };

  exports.findUserById = function (userId, callback) {
    user.findById(userId, callback);
  };
})();
