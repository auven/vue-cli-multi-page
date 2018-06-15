<template>
  <div class="counter-warp">
    {{#vuex}}
    <p>Vuex counter：\{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    {{/vuex}}
    <a href="/pages/home/home.html" class="home">去往首页</a>

  </div>
</template>

<script>
{{#vuex}}
// Use Vuex
import { mapState, mapMutations } from 'vuex'
{{/vuex}}
export default {
{{#vuex}}
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
{{/vuex}}
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
