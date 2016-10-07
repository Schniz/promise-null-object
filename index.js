function shouldReturnPromiseProperty(str) {
  return ['then', 'catch'].indexOf(str) > -1;
}

function PromiseNullObject() {
  return new Proxy(Promise.resolve(), {
    get: function(target, name) {
      if (shouldReturnPromiseProperty(name)) {
        return target[name].bind(target, PromiseNullObject());
      }

      return PromiseNullObject();
    }
  });
};

module.exports = PromiseNullObject;
