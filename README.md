# Message Interpolation

```sh
$ npm i message-interpolation -S
# or
$ yarn add message-interpolation
# or
$ pnpm i message-interpolation -S
```

```js
import mi from 'message-interpolation';

const msg = `{say}, World!`;
mi(msg, { say: 'Hello' });
// Hello, World!

const alphabet = `{0} B {1} D {2} F G`;
mi(alphabet, ['A', 'C', 'E']);
// A B C D E F G
```
