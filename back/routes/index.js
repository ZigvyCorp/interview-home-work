const postSite = require('./post')

function route(app) {
    app.use('/posts', postSite)
    app.get('/', (req, res) => res.json('hello'))
}

module.exports = route
