const mongoose = require("mongoose");

 const UserSchema = new mongoose.Schema(
   {
     userId: { 
       type: Number, 
       required: true,
     },
     name: {
         type: String,
     },
     username: {
         type: String,
     },
     email: {
         type: String,
     }
   }
 );


 const User = mongoose.model("User", UserSchema);

 module.exports = User;