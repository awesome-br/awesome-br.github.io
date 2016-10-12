<template>
  <h1>{{ section.name }}</h1>
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
    ...mapGetters({section: 'sectionData'})
  }
}
</script>
