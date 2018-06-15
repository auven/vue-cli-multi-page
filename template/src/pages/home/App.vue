<template>
  <div>
    <div class="home">我是 home 页面</div>
    {{#vuex}}
    <p>Vuex counter：\{{ count }}</p>
    {{/vuex}}
    <a href="/pages/index/index.html" class="home">回到 index</a>
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
.home {
  color: red;
}
</style>
