let controller = require('./controller');

module.exports = (route)=>{
  route.post('/user/login', controller.login);
  route.post('/user/register', controller.register);
  route.get('/user/:id', controller.getUser);
};
