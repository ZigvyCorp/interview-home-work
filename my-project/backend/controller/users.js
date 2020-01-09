
	function signup(name, email, password, db){
    return new Promise((resolve, reject) => {

      const collection = db.collection("user");
      collection.insertOne( {
          name: name,
          email: email,
          password: password
        },function(err, result){
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
    })
	}
	function validateSignIn(username, password, db){
    return new Promise((resolve, reject) =>{
      const collection = db.collection("user");
			collection.findOne( { email : username ,password: password 
			},function(err, result){
				if (err) {
          reject(err);
          return;
        }
        resolve(result);
			});
    })
  }
	
module.exports = { signup, validateSignIn }