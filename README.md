
# [awesome-br.com](http://awesome-br.com)

![](http://awesome-br.com/screenshot.png?new)

[![Build Status](https://travis-ci.org/awesome-br/awesome-br.github.io.svg?branch=master)](https://travis-ci.org/awesome-br/awesome-br.github.io)

  - [Nossa Proposta](#nossa-proposta)
  - [Como funciona](#como-funciona)
  - [Como Participar](#como-participar)
  - [Como testar o awesome no seu computador](#como-testar-o-awesome-no-seu-computador)
  - [Como usar a CLI](https://github.com/welksonramos/awesome-br-cli)
  - [Conheça os colaboradores](http://awesome-br.com/#/colaboradores)

## Nossa Proposta

Awesome BR possui um formato aberto a comunidade que deseja compartilhar conteúdo de qualidade frente às tecnologias mais atuais do mercado.

>Nossa proposta é fortalecer a difusão das tecnologias de desenvolvimento web na **língua portuguesa**.

## Como funciona

Nossa página [http://awesome-br.github.io](http://awesome-br.github.io) contém uma lista buscável de tecnologias, e cada tecnologia possui uma lista de links apontando para o melhor conteúdo em português da web. Todas as contribuições são feitas pela comunidade, todos podem participar.

## Como Participar

Para participar é necessário conhecimento em git/github. Caso esteja com dificuldades, leia [este artigo](http://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/). Após realizar o fork deste projeto, faça suas contribuições de acordo com a tecnologia em questão, alterando o arquivo `.json` dentro da pasta `sections`. Por exemplo, se você deseja adicionar um link na categoria *Laravel*, edite o arquivo `sections/laravel.json` e faça o pull request.

O formato para um novo item em qualquer tecnologia é:

```json
  {
    "name": "Título do link",
    "url": "Url do link",
    "type": "Tipo",
    "tags": [
      "tags",
      "tags"
    ],
    "paid": false,
    "author": {
      "name": "Nome do autor",
      "url": "Url do site do autor"
    }
  }
```
O tipo pode ser: "artigo",  "livro",  "video",  "screencast",  "styleguide",  "palestra",  "tutorial",  "dica",  "slide", "vídeo",  "documentação",  "url",  "curso",  "guia",  "pacote",  "hangout",  "slideshare",  "apostila",  "site". Outros tipos deverão ser requisitados abrindo uma ISSUE, pois o teste de Integração Contínua vai falhar.

Se você deseja adicionar uma nova tecnologia, edite o arquivo `sections.json` incluindo um novo item e adicione o relativo arquivo json no diretório `sections`. Você pode usar o arquivo `sections/base.json` como base. Não adicione uma categoria vazia. Teste e faça o PR para que possamos analisar.

## Como testar o awesome no seu computador

Antes de enviar o pull request para o nosso repositório central, recomendamos testar a execução do site no seu computador. Isso pode ser feito através de um servidor web simples, como o `http-server` provido pelo `node`. Para isso, é preciso instalar o `node` e `npm` no seu sistema operacional, o que pode ser facilmente feito através do [site oficial](https://nodejs.org/en/) para Windows, ou através do `sudo apt-get install npm` no linux (debian).

Após instalar o `node` e o `npm`, instale as dependências (`http-server`) através do comando `npm install`, e, após a instalação, execute o comando `npm run http-server`.

A resposta que terá é algo semelhante a:

```bash
Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8081
  http:192.168.0.132:8081
```

Copie a URL, juntamente com a porta, e abra o site no navegador.

**Dica**: Use `ctrl+shift+r` para atualizar o cache após alterar os arquivos .json.

Alternativamente, você pode executar o comando ´python -m SimpleHTTPServer 9001´. Note que você deve ter o python instalado em sua máquina. A maioria dos S.O's Unix-Like como Mac e Linux já vem com o python pré-instalado. Após executar o comando, acesse, pelo navegador, o endereço http://localhost:9001

## Divulgue o Awesome BR

Adicione o badge no repositório do seu projeto ou em seu blog! Exemplo:

[![Awesome BR - Laravel](https://img.shields.io/badge/awesome--br.com-laravel-red.svg)](http://awesome-br.com/#/laravel)
[![Awesome BR - Android](https://img.shields.io/badge/awesome--br.com-android-green.svg)](http://awesome-br.com/#/android)

Markdown:

```
[![Awesome BR - Laravel](https://img.shields.io/badge/awesome--br.com-laravel-green.svg)](http://awesome-br.com/#/laravel)`
```

HTML:

```
<a href="http://awesome-br.com/#/laravel"><img src="https://img.shields.io/badge/awesome--br.com-laravel-red.svg" alt="Awesome BR - Laravel" /></a>
```
