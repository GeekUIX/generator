'use strict';

const name = process.argv[2];

if (!name) {
  throw new Error('No name specified');
}

const path = require('path');
const generator = require('./generator');

const binaries = [
  /\/mipmap-.+$/,
  /\/gradlew(\.bat)?$/,
  /\/gradle$/
];

generator({
  source: path.join(__dirname, 'template'),
  output: path.join(__dirname, 'output'),
  rename: {
    'android/app/src/main/java/com/example': 'android/app/src/main/java/com/' + name,
    '_gitignore': '.gitignore',
    '_watchmanconfig': '.watchmanconfig',
  },
  mappings: {
    'package': 'com.' + name,
    name
  },
  binaries
});
