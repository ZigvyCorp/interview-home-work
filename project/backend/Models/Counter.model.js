const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Counter = new Schema(
  {
    name: {
      type: String,
    },
    seq: {
      type: Number,
    }
   
  },
);

module.exports = mongoose.model("Counter", Counter);
