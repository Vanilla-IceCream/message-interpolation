# Library-Starter [![Build Status](https://travis-ci.org/Vanilla-IceCream/Library-Starter.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/Library-Starter) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/Library-Starter/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/Library-Starter?branch=master) [![devDependencies Status](https://david-dm.org/Vanilla-IceCream/Library-Starter/dev-status.svg)](https://david-dm.org/Vanilla-IceCream/Library-Starter?type=dev)

Bare-bones example of how to create a library using Rollup, Babel, ESLint, Prettier, Jest, Travis, Coveralls, and David.

## Getting Started

1. Clone this repository and install its dependencies

```bash
$ git clone https://github.com/Vanilla-IceCream/Library-Starter <LIB_NAME>
$ cd <LIB_NAME>

$ npm install
# or pnpm install
# or yarn install
```

2. Watch files and recompile whenever they change

```bash
$ npm start
# or pnpm start
# or yarn start
```

`yarn start` builds the library, then keeps rebuilding it whenever the source files change.

3. Compile and bundle code

```bash
$ npm run build
# or pnpm build
# or yarn build
```

`yarn build` builds the library to `dist`, generating three major files:

* `dist/LIB_NAME.cjs.js` a CommonJS bundle, suitable for use in Node.js, that requires the external dependency. This corresponds to the `"main"` field in package.json
* `dist/LIB_NAME.esm.js` an ES module bundle, suitable for use in other people's libraries and applications, that imports the external dependency. This corresponds to the `"module"` field in package.json
* `dist/LIB_NAME.umd.js` a UMD build, suitable for use in any environment (including the browser, as a <script> tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

4. Check the code quality

```bash
$ npm run lint
# or pnpm lint
# or yarn lint
```

`yarn lint` checks the code, whether it meets [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript), and type checking using [Flow](https://github.com/facebook/flow).

5. Run the unit tests

```bash
$ npm test
# or pnpm test
# or yarn test
```

`yarn test` runs the unit tests using [Jest](https://github.com/facebook/jest) to check if the function is executable.
