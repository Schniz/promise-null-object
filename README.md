Node.js Promise Null Objects for Testing
========================================

Inspired by RSpec's `stub.as_null_object`, this module returns a new ES2015 `Proxy` that will fulfill your promises.
Every property on the object returns a new, resolving promise. only `catch` and `then` will be the real implementation.
The main usage will be to mock things like `fetch` or anything that is promise-based.

Short usage
-----------
From the spec:

```js
const promiseNullObject = require('.');

it('works', () => {
  return promiseNullObject().a.b.c.d.e.f.g.h.i.then(e => e.a.b.c.d.ef.d.f.h());
});
```
