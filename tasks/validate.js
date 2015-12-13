var jlint = require('jlint');
var log = require('pretty-log');
var _ = require('lodash');
var types = require('../types');

var options = {
  pattern: './sections/*.json'
};

jlint(options, function(error, json, file) {
  
  for (var index in json){
    var type = json[index].type;
    if (file=="./sections/base.json") continue; //base pode pular.
    if (types.validTypes.indexOf(type)==-1){
      log.error(file);
      console.log("Tipo inválido para o link: \"" + type + "\". Se você acredita que este é um tipo de link válido, por favor abra uma ISSUE requisitando o mesmo. Os tipos cadastrados são: " + JSON.stringify(types.validTypes)  );
      process.exit(1);
    }
  }
  if (!_.isEmpty(error)) {
    log.error(file);
    console.log(error.message);
    process.exit(1);
  } else {
    log.success(file);
  }
});