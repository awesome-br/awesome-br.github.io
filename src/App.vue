<script>
import RootHeader from './components/root/header.vue'

export default {
  components: { RootHeader },
  data () {
    return { }
  }
}
</script>

<template>
  <div>
    <root-header></root-header>
    <router-view></router-view>
  </div>
</template>

<style>
body, h1, h2, h3, h4 {
  font-family: 'Ubuntu', sans-serif;
}
</style>
