import Vue from 'vue'
import App from './App.vue'
import directives from './directives'
import store from './vuex'

Vue.use(directives)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
