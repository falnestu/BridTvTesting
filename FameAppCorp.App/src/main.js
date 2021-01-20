import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

import SimpleLayout from './layouts/SimpleLayout'
import DefaultLayout from './layouts/HomeLayout'

import BridVideoShortCode from './components/shortcode/brid_video'

import './assets/css/bootstrap-fame.css'
import './assets/lib/fontawesome-pro-5.8.1-web/css/all.min.css'
import './assets/lib/ion.rangeSlider/css/ion.rangeSlider.min.css'
import './assets/css/site.css'
import './assets/css/custom.css'
//import './assets/css/nprogress.css'

import 'bootstrap'
//import './assets/js/site3'

Vue.config.productionTip = true

Vue.component('default-layout', DefaultLayout)
Vue.component('simple-layout', SimpleLayout)

Vue.component('brid_video-shortcode', BridVideoShortCode)

const app = new Vue({
  router,
  store: store,
  render (h)  {
    return h(App)
  }
}).$mount('#app')
