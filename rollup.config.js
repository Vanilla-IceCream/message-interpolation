import { readFileSync } from 'fs';
import { join } from 'path';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const babelrc = JSON.parse(readFileSync('./.babelrc', 'utf8'));

babelrc.presets.splice(0, 1, ['env', { modules: false }]);
babelrc.plugins.splice(0, 0, 'external-helpers');

const BABEL_CONFIG = {
  babelrc: false,
  ...babelrc,
  exclude: 'node_modules/**',
};

export default [
  {
    input: join(__dirname, 'src/index.js'),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      babel(BABEL_CONFIG),
    ],
    external: Object.keys(pkg.dependencies),
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'LIB_NAME',
        globals: {
          rxjs: 'rxjs',
          'rxjs/operators': 'rxjs.operators',
        },
      },
    ],
    plugins: [
      babel(BABEL_CONFIG),
    ],
    external: Object.keys(pkg.dependencies),
  },
];
