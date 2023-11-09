const asyncHandler = (fn) => {
    return (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = asyncHandler;