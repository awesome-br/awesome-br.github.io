import Main from './components/main.vue'
import Single from './components/single.vue'

export default [
   { path: '/', component: Main },
   { path: '/:slug', component: Single }
]
