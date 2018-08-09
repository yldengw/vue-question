// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/'
import './style/common.less'
import './config/rem'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',
  // base: '/share/',
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
