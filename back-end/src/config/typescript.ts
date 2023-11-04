import * as tsConfigPaths from 'tsconfig-paths';
const tsConfig = require('../../tsconfig.json');

export const pathsConfig = () => {
  const baseUrl = '.';
  tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths,
  })();
}

