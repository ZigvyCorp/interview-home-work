// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use('/api', require('./api'));
};
