import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{else}}
import HelloWorld from '@/components/HelloWorld'
{{/router}}
{{#vuex}}
import store from '@/store'
{{/vuex}}

Vue.config.productionTip = false

{{#unless router}}
Vue.component('hello-world', HelloWorld)
{{/unless}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  components: { App },
  template: '<App/>'
})
