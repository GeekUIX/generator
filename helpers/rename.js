'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function rename(root, mappings, files) {
  return files.map(filepath => {
    for (let item in mappings) {
      const src = path.join(root, item);
      if (filepath === src) {
        const dest = path.join(root, mappings[item]);
        fs.renameSync(src, dest);
        return dest;
      }
    }
    return filepath;
  });
}
