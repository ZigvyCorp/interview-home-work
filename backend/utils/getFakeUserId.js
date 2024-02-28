const getFakeUserId = () => {
    return Math.floor(Math.random() * 10) + 1;
};

module.exports = getFakeUserId;