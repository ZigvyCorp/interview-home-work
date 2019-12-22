module.exports = {
    code200 (obj) {
        return Object.assign ({code: 200, error: false}, obj)
    },
    code400 (obj) {
        return Object.assign ({code: 400, error: true}, obj)
    },
    code403 (obj) {
        return Object.assign ({code: 403, error: true}, obj)
    },
    code404 (obj) {
        return Object.assign ({code: 404, error: true}, obj)
    },
    code500 (obj) {
        return Object.assign ({code: 500, error: true}, obj)
    }
}