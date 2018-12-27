import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import '@/assets/css/tailwind.css'

window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
