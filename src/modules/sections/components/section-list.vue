<script>
export default {
  props: {
    list: Array
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3" v-for="section in list">
      <div class="item" v-geopattern="section.name">
        <span class="badge">{{ section.type }}</span>
        <h3>{{ section.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .item {
    color: #fff;
    margin: 10px 0;
    padding: 10px;
    min-height: 100px;
    background-color: #eee;
  }
</style>
