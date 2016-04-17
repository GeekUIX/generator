'use strict';

const fs = require('fs');
const promisify = require('./promisify');

module.exports = {
  linkAsync: promisify(fs.link),
  mkdirAsync: promisify(fs.mkdir),
  readdirAsync: promisify(fs.readdir),
  readFileAsync: promisify(fs.readFile),
  renameAsync: promisify(fs.rename),
  statAsync: promisify(fs.stat),
  writeFileAsync: promisify(fs.writeFile),
}
