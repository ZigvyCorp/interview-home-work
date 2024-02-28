const getFakeDate = (startDate, endDate) => {
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

module.exports = getFakeDate;