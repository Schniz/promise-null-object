const promiseNullObject = require('.');

it('works', () => {
  return promiseNullObject().a.b.c.d.e.f.g.h.i.then(e => e.a.b.c.d.ef.d.f.h());
});
