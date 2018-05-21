# Library Boilerplate [![Build Status](https://travis-ci.org/Vanilla-IceCream/Library-Boilerplate.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/Library-Boilerplate) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/Library-Boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/Library-Boilerplate?branch=master) [![devDependencies Status](https://david-dm.org/Vanilla-IceCream/Library-Boilerplate/dev-status.svg)](https://david-dm.org/Vanilla-IceCream/Library-Boilerplate?type=dev)

## Getting Started

1. Clone this boilerplate

```bash
$ git clone https://github.com/Vanilla-IceCream/Library-Boilerplate
$ cd Library-Boilerplate
```

2. Install dependencies

```bash
$ yarn install && yarn typed
```

3. Watch files and recompile whenever they change

```bash
$ yarn start
```

`yarn start` builds the library, then keeps rebuilding it whenever the source files change using `rollup-watch`.

4. Compile and bundle code

```bash
$ yarn build
```

`yarn build` builds the library to `dist`, generating three major files:

* `dist/LIB_NAME.cjs.js` A CommonJS bundle, suitable for use in Node.js, that requires the external dependency. This corresponds to the `"main"` field in package.json
* `dist/LIB_NAME.esm.js` an ES module bundle, suitable for use in other people's libraries and applications, that imports the external dependency. This corresponds to the `"module"` field in package.json
* `dist/LIB_NAME.umd.js` a UMD build, suitable for use in any environment (including the browser, as a <script> tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

5. Check the code quality

```bash
$ yarn lint
```

6. Run the unit tests

```bash
$ yarn test
```
