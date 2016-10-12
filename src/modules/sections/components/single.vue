<template>
  <div class="container">
    <div class="row">
      <header class="page-header col-md-12">
        <h1>{{ section.name }}</h1>
      </header>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3" v-for="link in links">
        <a :href="link.url" target="_new" class="item" v-geopattern="link.name">
          <span class="badge">{{ link.type }}</span>
          <h3>{{ link.name }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setCurrent(to.params.slug))
  },
  beforeRouteLeave (to, from, next) {
    this.cleanCurrent()
    next()
  },
  methods: {
    ...mapActions(['setCurrent', 'cleanCurrent'])
  },
  computed: {
    ...mapGetters({section: 'sectionData'}),
    links () {
      return this.$store.state.sections.links
    }
  }
}
</script>

<style scoped>
  .item {
    display: block;
    color: #fff;
    margin: 10px 0;
    padding: 10px;
    min-height: 100px;
    background-color: #eee;
  }
</style>
