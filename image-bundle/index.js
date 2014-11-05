var through = require('through2');
var datauri = require('datauri');
var escape = require('js-string-escape');

module.exports = function (file) {
    if (!/\.jpg$/.test(file)) {
        return through();
    }

    return through(process);

    function process(chunk, enc, cb) {
        cb(undefined, "module.exports = '" + escape(datauri(file)) + "'");
    }
};
