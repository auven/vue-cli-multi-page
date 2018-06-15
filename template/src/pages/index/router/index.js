import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterTest1 from '@/components/RouterTest1'
import RouterTest2 from '@/components/RouterTest2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/RouterTest1/:p1/:p2',
      name: 'RouterTest1',
      component: RouterTest1
    },
    {
      path: '/RouterTest2',
      name: 'RouterTest2',
      component: RouterTest2
    }
  ]
})
