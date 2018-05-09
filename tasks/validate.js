var jlint = require('jlint');
var log = require('pretty-log');
var _ = require('lodash');
var validsTypes = require('../types').validTypes;

// valida tipos existentes no json
var triggerError = function (message, file) {
  log.error(file);
  console.log(message);
  process.exit(1);
}

var validateTypes = function(json, file) {
  if (file == "./sections/base.json") return;

  var message;
  var types = _.chain(json)
    .map('type')
    .uniq()
    .value();

  types.forEach(function (type) {
    if(validsTypes.indexOf(type) < 0) {
      message = "Tipo inválido para o link: \"" + type + "\". Se você acredita que este é um tipo de link válido, por favor abra uma ISSUE requisitando o mesmo. Os tipos cadastrados são: " + JSON.stringify(validsTypes);
      triggerError(message, file);
    }
  });
}

var options = {
  pattern: './sections/*.json'
};

jlint(options, function(error, json, file) {

  if (!_.isEmpty(error)) {
    triggerError(error.message, file)
  }

  validateTypes(json, file);

  log.success(file);
});
