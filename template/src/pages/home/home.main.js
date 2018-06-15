import Vue from 'vue'
import App from './App'
{{#vuex}}
import store from '@/store'
{{/vuex}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  components: { App },
  created: function () {
    console.log('我是 Home 页')
  },
  template: '<App/>'
})
