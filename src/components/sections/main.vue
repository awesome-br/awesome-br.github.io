<script>
// import { mapActions } from 'vuex'

export default {
  mounted () {
    this.loadSections()
  },
  methods: {
    loadSections () {
      this.$store.dispatch('loadSections')
    }
  }
}
</script>

<template>
  <h1>Home</h1>
</template>
