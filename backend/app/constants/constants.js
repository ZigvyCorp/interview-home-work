const successStatus = (res, data, status, count) => {
    return res.status(200).json({
        status: status,
        count: count === undefined ? 1 : count,
        data: data
    })
}

const successCreateStatus = (res, data, status) => {
    return res.status(201).json({
        status: status,
        data: data
    })
}

const errorStatus = (res, error) => {
    return res.status(500).json({
        status: 'Internal Server Error',
        message: error.message
    })
}

const badRequestStatus = (res, message) => {
    return res.status(400).json({
        status: 'Bad Request',
        message: message
    })
}

const notFoundStatus = (res, status) => {
    return res.status(404).json({
        status: status
    })
}



module.exports = {
    successStatus,
    successCreateStatus,
    errorStatus,
    badRequestStatus,
    notFoundStatus
}