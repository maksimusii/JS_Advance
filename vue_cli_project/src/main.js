import Vue from 'vue'
import router from './router'
import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(require('./App').default)
}).$mount('#app')
