import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import test01 from '@/components/test'
import test02 from '../components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: []
    }, {
      path: 'test01',
      component: test01
    },
    {
      path: 'test02',
      component: HelloWorld2
    },{
      path: 'test03',
      component: test02
    }

  ]
})
