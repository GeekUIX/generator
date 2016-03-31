'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function del(src) {
  if (fs.existsSync(src)) {
    fs.readdirSync(src).forEach((file, index) => {
      const curPath = path.join(src, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        del(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(src);
  }
};
