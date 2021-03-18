const importUtility = require('../utilities/importer')
const factorize = require('../databases')
const { getEnvironment } = require('../config')


/* Register all models */
const sequelize = factorize('mysql');
const modelCreators = importUtility(__dirname, ['index.js']);
const Models = {};
modelCreators.forEach((creator) => {
  const { name, model } = creator(sequelize);
  Models[name] = model
})

Object.values(Models).forEach((model) => {
  if (model.associate) {
    model.associate(Models)
  }
})

/* Sync all models */
// if (getEnvironment() === 'development') {
//   sequelize.sync({ force: true })
// }

/* Export database */
module.exports = Models;