// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// list of reusable components
Vue.component('hello', {
  template: '<h1>OOOBDA OBBA DOOO</h1>'
})

// BOX component
//import box from './components/shared/box.vue'
//Vue.component('box', box)

// BOX component
//import Croppa from 'vue-croppa'
//import 'vue-croppa/dist/vue-croppa.css'


// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify);

// SNOTIFY

import Snotify from  'vue-snotify'
import 'vue-snotify/styles/material.css'
Vue.use(Snotify)
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
