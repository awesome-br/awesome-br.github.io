var jlint = require('jlint');
var log = require('pretty-log');
var _ = require('lodash');

var options = {
  pattern: './sections/*.json'
};

jlint(options, function(error, json, file) {
  if (!_.isEmpty(error)) {
    log.error(file);
    console.log(error.message);
  } else {
    log.success(file);
  }
});
