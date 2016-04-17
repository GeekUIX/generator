'use strict';

const fs = require('fs');
const path = require('path');
const del = require('./helpers/del');
const copy = require('./helpers/copy');
const rename = require('./helpers/rename');
const substitute = require('./helpers/substitute');
const prompt = require('./helpers/prompt');
const tree = require('./helpers/tree');

module.exports = async function generator(options) {
  const result = await tree(options.source);
  const input = rename(options.source, options.rename, result);
  const output = await tree(options.output);
  const queue = input.map(filepath =>
    queue.add({
      root: options.root,
      file: filepath,
      exists: output.includes(filepath)
    })
  );

  // TODO: loop over the list of operations and asks for missing actions
  const actions = {
    y: 'overwrite',
    n: 'do not overwrite',
    a: 'overwrite this and all others',
    x: 'abort',
    d: 'show the differences between the old and the new',
  };

  // TODO: finally perform the actions
}
