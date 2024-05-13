import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify()

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
