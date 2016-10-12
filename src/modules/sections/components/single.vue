<template>
  <h1>Single</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setCurrent(to.params.slug))
  },
  methods: {
    ...mapActions(['setCurrent'])
  }
}
</script>
