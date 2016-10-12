import Vue from 'vue'
import App from './App.vue'
import directives from './directives'
import store from './vuex'
import router from './router'

Vue.use(directives)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
