[![discord badge](https://img.shields.io/discord/1150472957093744721?logo=discord)](https://discord.gg/pwrVPJJMfZ)

# `concat-everywhere`

[Concatenative programming](https://concatenative.org) in JS.

```js
import * from 'concat-everywhere';


const three = concat(1, 2, plus).pop();
console.log(three);
// 3


// Works with JS functions and "fat arrow" lambdas
const negativeNine = concat(
  2,
  console.log,
  3,
  console.log,
  Math.pow,
  console.log,
  n => ~n
);
// 2
// 2 3
// 8

console.log(negativeNine);
// -9
```
