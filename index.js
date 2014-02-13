var msgpack = require('msgpack-js-browser');

if (!global.DataView) {
  global.DataView = require('jdataview');
}

module.exports = msgpack;