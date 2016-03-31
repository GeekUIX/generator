'use strict'

module.exports = function filter(patterns, items) {
  return items.filter(item => {
    for (let i = 0, l = binaries.length; i < l; i++) {
      const pattern = binaries[i];
      if (typeof pattern === 'string') {
        if (item === pattern) {
          return false;
        }
      } else {
        if (pattern.test(item)) {
          return false;
        }
      }
    }
    return true;
  });
}
