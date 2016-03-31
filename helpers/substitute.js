'use strict';

const fs = require('fs');

module.exports = function generator(mappings, binaries, files) {
  for (let i = 0, l = files.length; i < l; i++) {
    const filepath = files[i];
    if (binaries.some(pattern => pattern.test(filepath))) {
      return;
    }
    let contents = fs.readFileSync(filepath).toString();
    for (let item in mappings) {
      contents = contents.replace('<%= ' + item + ' %>', mappings[item]);
    }
    fs.writeFileSync(filepath, contents.replace(), 'utf-8');
  }
  return files;
}
