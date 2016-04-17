'use strict';

const path = require('path');
const fs = require('./fs');
const prompt = require('./prompt');

module.exports = async function tree(src, list) {
  list = typeof list === 'undefined' ? [] : list;

  const sourceStat = await fs.statAsync(src);

  if (sourceStat.isDirectory()) {
    const children = await fs.readdirAsync(src);
    await Promise.all(children.map(child => {
      return tree(path.join(src, child), list);
    }));
  } else {
    list.push(src);
  }

  return list;
}
