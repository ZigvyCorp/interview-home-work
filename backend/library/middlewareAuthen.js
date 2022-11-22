const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env
const {UNAUTHORIZED, FORBIDDEN, BAD_REQUEST} = require('./constant')


function checkAuthen(req,res, next){
    const headerAuthen = req.headers['authorization']
    if (headerAuthen == undefined){
        return res.sendStatus(FORBIDDEN)
    }
    const bearerToken = headerAuthen.split(' ')[1]
    if (bearerToken){
        jwt.verify(bearerToken, JWT_SECRET,(err, decode)=>{
            if(err){
                return res.sendStatus(FORBIDDEN)
            }
            req.userId = decode['id']
            next()
        })
    }
    else {
        return res.send("some error !!!")
    }
    
}

module.exports = checkAuthen