<template>
  <h1>{{ section.name }}</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setCurrent(to.params.slug))
  },
  methods: {
    ...mapActions(['setCurrent'])
  },
  computed: {
    ...mapGetters({section: 'sectionData'})
  }
}
</script>
