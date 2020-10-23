const mongoose = require("mongoose");
/**
 * Compare userId with owner of post then get role access post.
 */
module.exports = (userId, post_ownerId) => {
    let isAuthorized = false;
    try{
      if (
        mongoose.Types.ObjectId(userId.toString()).equals(post_ownerId.toString())) {
        isAuthorized = true;
      }else{
        isAuthorized = false;
      }
    }catch(err){
      // error convert hex
      console.log(err);
      isAuthorized = false;
    };

  return isAuthorized;
};
