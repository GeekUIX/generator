'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function rename(root, rename, files) {
  return files.map(filepath => {
    for (let item in rename) {
      const src = path.join(root, item);
      if (filepath === src) {
        return path.join(root, rename[item]);
      }
    }

    return filepath;
  });
}
