import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from './echat/echarts'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Echarts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
