'use strict';

const fs = require('fs');
const path = require('path');
const del = require('./helpers/del');
const filter = require('./helpers/filter');
const copy = require('./helpers/copy');
const rename = require('./helpers/rename');
const substitute = require('./helpers/substitute');

module.exports = function generator(options) {
  del(options.output);
  substitute(
    options.mappings,
    options.binaries,
    rename(
      options.output,
      options.rename,
      copy(options.source, options.output)
    )
  );
}
