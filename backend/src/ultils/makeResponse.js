const makeResponse = (mess = "success", data = [], status = 200) => {
    return {
        message: mess,
        data: data,
        status: status
    }
}

module.exports = makeResponse;