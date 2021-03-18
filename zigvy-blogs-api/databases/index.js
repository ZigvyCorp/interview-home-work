module.exports = function factorize(database) {
  return require(`./${database}`)();
}