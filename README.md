# Message Interpolation

The process of formatting messages for internationalization.

## Install

```sh
$ npm i message-interpolation
# or
$ yarn add message-interpolation
# or
$ pnpm i message-interpolation
# or
$ bun add message-interpolation
```

## Usage

```ts
import mi from 'message-interpolation';

/**
 * Named interpolation
 */
const msg = `{say}, World!`;
mi(msg, { say: 'Hello' });
// Hello, World!

/**
 * List interpolation
 */
const alphabet = `{0} B {1} D {2} F G`;
mi(alphabet, ['A', 'C', 'E']);
// A B C D E F G
```
