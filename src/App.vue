<script>
import RootHeader from './components/root/header.vue'
import SectionsHome from './components/sections/main.vue'

export default {
  components: { RootHeader, SectionsHome },
  data () {
    return { }
  }
}
</script>

<template>
  <div>
    <root-header></root-header>
    <sections-home></sections-home>
  </div>
</template>

<style>
body, h1, h2, h3, h4 {
  font-family: 'Ubuntu', sans-serif;
}
</style>
