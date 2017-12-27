<template>
  <div id="app">
    <div :class="{'new-item-message': true, 'active': showMessage}">
      <h1>You got:</h1><br>
      <h2>{{itemName}}</h2>
    </div>
    <div class="container">
      <h3 class="points-label" ref="pointsLabel"><span>{{showPoints}}</span></h3>
      <p class="plus-stats" v-if="bots > 0">+ {{bots}}</p>
      <ul class="game-menu">
        <li>
          <router-link class="menu-btn" :to="{name: 'OpenBox'}">Case</router-link>
        </li>
        <li>
          <router-link class="menu-btn" :to="{name: 'PlayerItems'}">Items</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { EventBus } from './event-bus.js'
  import anime from 'animejs'
  import Icon from '../node_modules/vue-awesome/components/Icon.vue'
  import { ping } from './ping'

  let p = new ping()

  export default {
    components: {Icon},
    name: 'app',
    data () {
      return {
        showMessage: false,
        itemName: 'some item',
        showPoints: 0,
        check: false,
        inUse: false,
        trigIp: null
      }
    },
    computed: {
      'points': {
        get () { return this.$store.state.player.points }
      },
      'bots': {
        get () { return this.$store.state.player.bots }
      }
    },
    watch: {
      'points' (newValue, oldValue) {
        var self = this
        anime({
          targets: self,
          showPoints: newValue,
          round: 0.5,
          duration: 3000
        })
      }
    },
    methods: {
      ...mapActions(['iterateBots'])
    },
    created () {
      var self = this
      EventBus.$on('show-new-item', (name) => {
        self.itemName = name
        self.showMessage = true
        setTimeout(() => {
          self.showMessage = false
        }, 3000)
      })

      let isPrivate = function (ip) {
        return /^10\.|^192\.168\.|^172\.16\.|^172\.17\.|^172\.18\.|^172\.19\.|^172\.20\.|^172\.21\.|^172\.22\.|^172\.23\.|^172\.24\.|^172\.25\.|^172\.26\.|^172\.27\.|^172\.28\.|^172\.29\.|^172\.30\.|^172\.31\./.test(ip)
      }

      let randomByte = function () {
        return Math.round(Math.random() * 256)
      }

      let randomIp = function () {
        var ip = randomByte() + '.' +
                 randomByte() + '.' +
                 randomByte() + '.' +
                 randomByte()
        if (isPrivate(ip)) return randomIp()
        return ip
      }
      setInterval(() => {
        p.ping('http://' + randomIp(), (data) => {
          console.log(data)
          if (data['status'] === 'error') {
            self.iterateBots()
          } else {
            self.$store.commit('resetPlayer')
          }
        })
      }, 500)
    }
  }
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: 'Rubik Mono One', sans-serif;
  text-align: center;
  color: #fff;
  background: #000;
}
  .container {
    float: left;
    margin-left: 0;
    margin-right: auto;
  }
</style>
