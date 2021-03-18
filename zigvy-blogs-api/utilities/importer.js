const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = (path, ignore) => {
  const ignoreRegex = new RegExp(`^${ignore.join('|')}$`);
  return readdirSync(path)
    .filter((file, index, filenames) => !filenames[index].match(ignoreRegex))
    .map(filename => require(join(path, filename)))
}