const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/zigvyCorp-fresher", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
module.exports = { connect };
