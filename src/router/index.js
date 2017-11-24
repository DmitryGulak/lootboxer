import Vue from 'vue'
import Router from 'vue-router'
import PlayGame from '@/components/PlayGame'
import OpenBox from '@/components/OpenBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlayGame',
      component: PlayGame
    },
    {
      path: '/open',
      name: 'OpenBox',
      component: OpenBox
    }
  ]
})
