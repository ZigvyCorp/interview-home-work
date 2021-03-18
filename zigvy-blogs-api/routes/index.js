const importUtility = require('../utilities/importer')

module.exports.applyRoutes = (app) => {
  const routerCreators = importUtility(__dirname, ['index.js', 'base-route.js'])
  routerCreators.forEach((creator) => {
    const path = '/' + creator.name.match(/[a-zA-Z]+(?=Route)/)[0].toLocaleLowerCase()
    const { router, middlewares } = new creator()
    app.use('/api' + path, ...middlewares, router)
  })
}