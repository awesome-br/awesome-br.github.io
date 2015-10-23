
<h1 align="center">
<a href="http://awesome-br.github.io" target="_blank">awesome-br.github.io</a>
<img src="https://cloud.githubusercontent.com/assets/1509692/10661390/79f3033a-788c-11e5-97df-a90e5e5a4f49.png"/>
</h1>

  - [Nossa Proposta](#nossa-proposta)
  - [Como funciona](#como-funciona)
  - [Como Participar](#como-participar)
  - [Adicione no seu site também!](#adicione-no-seu-site-tamb%C3%A9m)
    - [Laravel](#laravel)
    - [Angular](#angular)
    - [PHP](#php)
    - [Vue](#vue)
    - [React](#react)
    - [Android](#android)
  - [Contribua como revisor](#contribua-como-revisor)
  - [Como testar o awesome no seu computador](#como-testar-o-awesome-no-seu-computador)



## Nossa Proposta

Awesome BR possui um formato aberto a comunidade que deseja compartilhar conteúdo de qualidade frente às tecnologias mais atuais do mercado. 

>Nossa proposta é fortalecer a difusão das tecnologias de desenvolvimento web na **língua portuguesa**. 

## Como funciona

Nossa página [http://awesome-br.github.io](http://awesome-br.github.io) contém uma lista buscável de tecnologias, e cada tecnologia possui uma lista de links apontando para o melhor conteúdo em português da web. Todas as contribuições são feitas pela comunidade, todos podem participar. 

## Como Participar

Para participar é necessário conhecimento em git/github. Caso esteja com dificuldades, leia [este artigo](http://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/). Após realizar o fork deste projeto, faça suas contribuições de acordo com a tecnologia em questão, alterando o arquivo `itens.json`. Por exemplo, se você deseja adicionar um link na categoria *Laravel*, edite o arquivo `laravel/itens.json` e faça o pull request. 

Se você deseja adicionar uma nova tecnologia, abra uma [nova issue](https://github.com/awesome-br/awesome-br.github.io/issues/new) requisitando a entrada da tecnologia em questão.

O formato para um novo item em qualquer tecnologia é:

```javascript
  {
    "name": "Título do link",
    "url": "Url do link",
    "type": "Tipo",
    "tags": [
      "tags",
      "tags"
    ],
    "author": {
      "name": "Nome do autor",
      "url": "Url do site do autor"
    }
  }
``` 
O tipo pode ser: artigo, tutorial, dica, livro, vídeo, screencast,código etc


## Adicione no seu site também!

Se o seu link foi selecionado, adicione o badge nele apontando para o nosso diretório:

### Laravel
![](https://img.shields.io/badge/awesome--br.github.io-laravel-orange.svg) 
```html
<a href="http://awesome-br.github.io/laravel">
    <img src="https://img.shields.io/badge/awesome--br.github.io-laravel-orange.svg"/>
</a>
```

### Angular
![](https://img.shields.io/badge/awesome--br.github.io-angular-red.svg) 
```html
<a href="http://awesome-br.github.io/angular">
    <img src="https://img.shields.io/badge/awesome--br.github.io-angular-red.svg"/>
</a>
```

### PHP
![](https://img.shields.io/badge/awesome--br.github.io-php-blue.svg) 
```html
<a href="http://awesome-br.github.io/php">
    <img src="https://img.shields.io/badge/awesome--br.github.io-php-blue.svg"/>
</a>
```

### VUE
![](https://img.shields.io/badge/awesome--br.github.io-vue-pink.svg) 
```html
<a href="http://awesome-br.github.io/vue">
    <img src="https://img.shields.io/badge/awesome--br.github.io-vue-pink.svg"/>
</a>
```

### React
![](https://img.shields.io/badge/awesome--br.github.io-react-blue.svg) 
```html
<a href="http://awesome-br.github.io/react">
    <img src="https://img.shields.io/badge/awesome--br.github.io-react-blue.svg"/>
</a>
```

### Android
![](https://img.shields.io/badge/awesome--br.github.io-android-red.svg) 
```html
<a href="http://awesome-br.github.io/android">
    <img src="https://img.shields.io/badge/awesome--br.github.io-android-red.svg"/>
</a>
```

## Contribua como revisor

Você pode nos ajudar também como revisor, recebendo os pull requests e verificando se está tudo OK, inclusive  validando o formato JSON. Quanto mais revisores/colaboradores, melhor! Se quiser contribuir envie email para `danieljfa at gmail dot com` com o seu login do github.

## Como testar o awesome no seu computador

Antes de enviar o pull request para o nosso repositório central, recomendamos testar a execução do site no seu computador. Isso pode ser feito através de um servidor web simples, como o `http-server` provido pelo `node`. Para isso, é preciso instalar o `node` e `npm` no seu sistema operacional, o que pode ser facilmente feito através do [site oficial](https://nodejs.org/en/) para Windows, ou através do `sudo apt-get install npm` no linux (debian). 

Após instalar o `node` e o `npm`, instale o `http-server` através do comando `npm install -g http-server`, e após a instalação, navegue até o diretório `awesome-br.github.io` e execute o comando `http-server`.

A resposta que terá é algo semelhante a:

```
Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8081
  http:192.168.0.132:8081
```

Copie a URL, juntamente com a porta, e abra o site no navegador. 

