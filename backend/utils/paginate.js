const paginate = (array, page, limit) => {
    return array.slice((page - 1) * limit, page * limit);
};

module.exports = paginate;