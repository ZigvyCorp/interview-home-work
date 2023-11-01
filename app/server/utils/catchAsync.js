//Bat loi khi them vao database
module.exports = (fn) => (req, res, next) => fn(req, res, next).catch(next);
