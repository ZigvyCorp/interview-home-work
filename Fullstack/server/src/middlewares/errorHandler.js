const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found!`)
    res.status(404)
    next(error)
}

const errHandler = (error, req, res, next) => {
    return res.status(res.statusCode).json({
        success: false,
        msg: error?.message
    })
}

module.exports = {
    notFound, errHandler
}