import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueLocalStorage from 'vue-localstorage'
import VueClipBoards from 'vue-clipboards'

Vue.use(VueLocalStorage)
Vue.use(VueClipBoards)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
