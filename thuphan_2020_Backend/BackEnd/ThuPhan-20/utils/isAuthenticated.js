const JWT_SERVICE = require('./jwt');
const Response = require('./response');
var models = require('../models');

module.exports = async function(req, res, next) {
    if (!req.headers.authorization) {
        res.send(Response.noAuthorizationResponse("Missing authorization.", null));
    }

    var token = req.headers.authorization;

    token = token.split(' ')[1];

    try {
        var decodedToken = JWT_SERVICE.verify(token);
    } catch(err) {
        res.send(Response.invalidAuthorizationResponse("Invalid authorization.", err));
    }

    var user = await models.User.findOne({
        where: {
            id: decodedToken.payload.user
        }
    });

    console.log(user);

    await next();
}