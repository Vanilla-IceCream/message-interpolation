import { join } from 'path';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
  {
    input: join(__dirname, 'src/index.js'),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      babel(),
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
      babel(),
    ],
    external: Object.keys(pkg.dependencies),
  },
];
