<script>
import { mapActions, mapState } from 'vuex'
import List from './section-list.vue'
export default {
  components: { List },
  mounted () {
    this.loadSections()
  },
  methods: {
    ...mapActions(['loadSections'])
  },
  computed: {
    ...mapState({
      sections: ({ sections }) => sections.list
    })
  }
}
</script>

<template>
  <div class="container-fluid">
    <List :list="sections" />
  </div>
</template>
