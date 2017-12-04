import Vue from 'vue'
import Router from 'vue-router'
import PlayGame from '@/components/PlayGame'
import OpenBox from '@/components/OpenBox'
import PlayerItems from '@/components/PlayerItems'

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
    },
    {
      path: '/items',
      name: 'PlayerItems',
      component: PlayerItems
    }
  ]
})
