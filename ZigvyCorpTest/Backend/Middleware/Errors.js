const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    if (statusCode == 500) {
        console.log(err);
        res.status(500).json({
            message: 'Xảy ra lỗi khi xử lý phía máy chủ',
            stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        });
    }
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export { notFound, errorHandler };
