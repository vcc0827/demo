import Vue from 'vue'
import Router from 'vue-router'
import circle from '@/components/Echarts/Circle/circle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views/Contain.vue'], resolve),
      children: [
        {
          path: '/energy',
          name: 'energy',
          component: resolve =>
            require(['./components/Echarts/EnergyBar/energyBar.vue'], resolve)
        },
        {
          path: '/circle',
          name: 'Circle',
          // component: resolve =>
          //   require(['./components/Echarts/Circle/circle.vue'], resolve)
          component: circle
        },
        {
          path: '/hex',
          name: 'Hex',
          component: resolve =>
            require(['./components/Echarts/Hex/Hex.vue'], resolve)
        }
      ]
    },
    {
      path: '/moment',
      name: 'moment',
      component: resolve =>
        require(['./components/Moment/timeTest.vue'], resolve)
    },

    {
      path: '/jsons',
      name: 'jsons',
      component: resolve => require(['./components/Jsons/jsons.vue'], resolve)
    },

    {
      path: '/left',
      name: 'left',
      component: resolve => require(['./components/Left.vue'], resolve)
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['./components/test.vue'], resolve)
    },
    {
      path: '/regist',
      name: 'Regist',
      cmoponent: resolve => require(['./views/Regist.vue'], resolve)
    },
    {
      path: '/train',
      name: 'train',
      component: resolve => require(['./views/train.vue'], resolve)
    },
    {
      path: '/pie',
      name: 'pie',
      component: resolve =>
        require(['./components/Echarts/SuperPie/Pie.vue'], resolve)
    },
    {
      path: '/coin',
      name: 'coin',
      component: resolve =>
        require(['./components/Echarts/SuperPie/BitCoin.vue'], resolve)
    },
    {
      path: '/fgnb',
      name: 'final',
      component: resolve => require(['../src/Target.vue'], resolve)
    }
  ]
})
