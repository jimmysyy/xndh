import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

//全局组件，单个网址
import Detail from '@/components/Detail'

Vue.component(Detail.name,Detail)

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
