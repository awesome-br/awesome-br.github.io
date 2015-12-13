var jlint = require('jlint');
var log = require('pretty-log');
var _ = require('lodash');

var options = {
  pattern: './sections/*.json'
};

/**
 * Tipos de link válidos
 * Isso evita de termos artigo e artigos, por exemplo.
 */ 
var validTypes = [
  "artigo",
  "livro",
  "video",
  "screencast",
  "styleguide",
  "palestra",
  "tutorial",
  "dica",
  "slide",
  "vídeo",
  "documentação",
  "url",
  "curso",
  "guia",
  "pacote",
  "hangout",
  "slideshare",
  "apostila",
  "site"
  ];

jlint(options, function(error, json, file) {
  
  for (var index in json){
    var type = json[index].type;
    if (file=="./sections/base.json") continue; //base pode pular.
    if (validTypes.indexOf(type)==-1){
      log.error(file);
      console.log("Tipo inválido para o link: \"" + type + "\". Se você acredita que este é um tipo de link válido, por favor abra uma ISSUE requisitando o mesmo. Os tipos cadastrados são: " + JSON.stringify(validTypes)  );
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