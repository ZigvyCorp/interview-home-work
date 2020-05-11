let controller = require('./controller');

module.exports = (route)=>{
  route.get('/post/:id', controller.getDetail);
  route.get('/post', controller.getList);
  route.post('/post', controller.create);
  route.post('/post/:id', controller.update);
};
