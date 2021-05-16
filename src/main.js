import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import 'vant/lib/index.css';
import '@/assets/fonts/iconfont.css'
// import toast from "@/components/common/toast/index";
// import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// Vue.use(FastClick)
// Vue.use(toast)
// FastClick.attach(document.body)

Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
