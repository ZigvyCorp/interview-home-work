const commonRoute = require('./common.routes')

const ROOT_ROUTE = '/api/v1'

function route(app){

    app.use(ROOT_ROUTE, commonRoute)
    
}
module.exports = route