const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
	const header = req.headers['authorization'];
	if(!header) return res.status(400).send('undefined token');
	try{
		const arrHeader = header.split(' ');
		const token = arrHeader[1];
		const verified = jwt.verify(token,process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
}