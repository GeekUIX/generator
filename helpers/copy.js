'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function copy(src, dest, list) {
  list = typeof list === 'undefined' ? [] : list;
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(childItemName => {
      copy(path.join(src, childItemName), path.join(dest, childItemName), list);
    });
  } else {
    fs.linkSync(src, dest);
    list.push(dest);
  }
  return list;
}
