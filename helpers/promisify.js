'use strict';

module.exports = function promisify(fn) {
  return function() {
    const args = Array.prototype.slice.call(arguments);
    return new Promise((resolve, reject) => {
      args.push((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
      fn.apply(null, args)
    });
  }
}
