const getTimeStampSecond = () => Date.now() / 1000;

const getTimeStampMilliSecond = () => Date.now();

module.exports = {
  getTimeStampSecond,
  getTimeStampMilliSecond,
};
