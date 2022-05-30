module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default'
    };

    if(req.query.hasOwnProperty('_sort')) {
        // thực hiện gán 2 object từ phải sang
        Object.assign(
            res.locals._sort, {
                enabled: true,
                type: req.query.type,
                column: req.query.column
            }
        );
    }
    next();
}