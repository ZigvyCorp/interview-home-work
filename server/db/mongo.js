const mongoose = require("mongoose");
exports.connectMongo = function () {
  mongoose.Promise = global.Promise;
  mongoose.set("useFindAndModify", false);
  mongoose.connect(
    "mongodb://" + "localhost" + ":" + 27017 + "/" + "zigvy",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(1, "CONNECT DB SUCCESS");
      }
    }
  );
};
