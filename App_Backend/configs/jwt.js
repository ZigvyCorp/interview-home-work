require('dotenv').config();
const jwt = require('jsonwebtoken');


const SECRET_KEY = process.env.JWT_SECRET; 


function generateToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}


const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    const payload = jwt.verify(token, SECRET_KEY); 
    req.user = payload; 

    next(); 
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid token' }); 
  }
};

module.exports = {
  generateToken,
  verifyToken
};
