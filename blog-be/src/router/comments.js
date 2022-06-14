module.exports = function(app) {
    var productsCtrl = require('../controllers/commentsController');
  
    // todoList Routes
    app.route('/products')
      .get(productsCtrl.get)
      .post(productsCtrl.store);
  
  
    app.route('/products/:productId')
      .get(productsCtrl.detail)
      .put(productsCtrl.update)
      .delete(productsCtrl.delete);
  };