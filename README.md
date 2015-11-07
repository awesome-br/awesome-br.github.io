
<h1 align="center">
<a href="http://awesome-br.com" target="_blank">awesome-br.com</a>
<br>
<img src="https://cloud.githubusercontent.com/assets/1509692/10661390/79f3033a-788c-11e5-97df-a90e5e5a4f49.png"/>
</h1>

  - [Nossa Proposta](#nossa-proposta)
  - [Como funciona](#como-funciona)
  - [Como Participar](#como-participar)
  - [Contribua como revisor](#contribua-como-revisor)
  - [Como testar o awesome no seu computador](#como-testar-o-awesome-no-seu-computador)

## Nossa Proposta

Awesome BR possui um formato aberto a comunidade que deseja compartilhar conteúdo de qualidade frente às tecnologias mais atuais do mercado. 

>Nossa proposta é fortalecer a difusão das tecnologias de desenvolvimento web na **língua portuguesa**. 

## Como funciona

Nossa página [http://awesome-br.github.io](http://awesome-br.github.io) contém uma lista buscável de tecnologias, e cada tecnologia possui uma lista de links apontando para o melhor conteúdo em português da web. Todas as contribuições são feitas pela comunidade, todos podem participar.

## Como Participar

Para participar é necessário conhecimento em git/github. Caso esteja com dificuldades, leia [este artigo](http://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/). Após realizar o fork deste projeto, faça suas contribuições de acordo com a tecnologia em questão, alterando o arquivo `.json` dentro da pasta `sections`. Por exemplo, se você deseja adicionar um link na categoria *Laravel*, edite o arquivo `sections/laravel.json` e faça o pull request. 

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

## Como testar o awesome no seu computador

Antes de enviar o pull request para o nosso repositório central, recomendamos testar a execução do site no seu computador. Isso pode ser feito através de um servidor web simples, como o `http-server` provido pelo `node`. Para isso, é preciso instalar o `node` e `npm` no seu sistema operacional, o que pode ser facilmente feito através do [site oficial](https://nodejs.org/en/) para Windows, ou através do `sudo apt-get install npm` no linux (debian).

Após instalar o `node` e o `npm`, instale as dependências (`http-server`) através do comando `npm install`, e, após a instalação, execute o comando `npm run http-server`.

A resposta que terá é algo semelhante a:

```
Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8081
  http:192.168.0.132:8081
```

Copie a URL, juntamente com a porta, e abra o site no navegador. 

**Dica**: Use `ctrl+shift+r` para atualizar o cache após alterar os arquivos .json.

