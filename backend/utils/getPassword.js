const getPassword = (length) => {
    return Math.random().toString(36).slice(-length);
};

module.exports = getPassword;