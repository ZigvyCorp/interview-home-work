const routes = (app) => {
    app.get('/user', (req, res) => {
        res.send('User Page')
    })
}

module.exports = routes