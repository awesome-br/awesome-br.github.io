<script>
export default {
}
</script>

<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#/"> Awesome BR</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="https://github.com/awesome-br/awesome-br.github.io#nossa-proposta">Conheça a nossa proposta</a>
          </li>
          <li>
            <a href="#/colaboradores">Colaboradores</a>
          </li>
          <li>
            <a target="_blank"
                href="http://free-time.github.io"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Palestras para desenvolvedores!">
                <span class="badge">Free time</span>
                <p class="visible-xs-inline"> - Palestras para desenvolvedores!</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/awesome-br/awesome-br.github.io"
               data-toggle="tooltip"
               data-placement="bottom"
               title="Fork me on Github!">
                <i class="fa fa-github-alt fa-lg"></i>
                <p class="visible-xs-inline"> - Fork me on Github!</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
  </nav>
</template>

<style scoped>
  .navbar {
    border-radius: 0;
  }
</style>
