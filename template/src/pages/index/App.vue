<template>
  <div id="app">
    <img src="@/assets/logo.png">
    {{#vuex}}
    <p>Vuex counter：\{{ count }}</p>
    {{/vuex}}
    <p><a href="/pages/counter/counter.html">跳转 counter 页面</a></p>
    {{#router}}
    <router-link to="/HelloWorld">跳转 HelloWorld</router-link>
    <router-link :to="{ name: 'RouterTest1', params: { p1: 'hello', p2: 'world' }}">跳转 Router Params Test</router-link>
    <router-link to="/RouterTest2?hello=world&ni=hao">跳转 Router Query Test</router-link>
    <router-view/>
    {{else}}
    <hello-world />
    {{/router}}
  </div>
</template>

<script>
{{#vuex}}
import { mapState } from 'vuex'
{{/vuex}}
export default {
{{#vuex}}
  computed: {
    ...mapState(['count'])
  }
{{/vuex}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
