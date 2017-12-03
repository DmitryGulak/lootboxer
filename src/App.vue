<template>
  <div id="app">
    <div :class="{'new-item-message': true, 'active': showMessage}">
      <h1>You got:</h1><br>
      <h2>{{itemName}}</h2>
    </div>
    <div class="container">
      <ul class="game-menu">
        <li>
          <router-link class="menu-btn" :to="{name: 'PlayGame'}"><icon name="gamepad" scale="1"></icon> Play <icon name="gamepad" scale="1"></icon></router-link>
        </li>
        <li>
          <router-link class="menu-btn" :to="{name: 'OpenBox'}"><icon name="gift" scale="1"></icon> lootbox <icon name="gift" scale="1"></icon></router-link>
        </li>
      </ul>
      <h3 class="points-label" ref="pointsLabel"><span>{{showPoints}}</span> coins</h3>
      <p class="plus-stats" v-if="bots > 0">+ {{bots}} bots</p>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { EventBus } from './event-bus.js'
  import anime from 'animejs'
  import Icon from "../node_modules/vue-awesome/components/Icon.vue";
  export default {
    components: {Icon},
    name: 'app',
    data () {
      return {
        showMessage: false,
        itemName: 'some item',
        showPoints: 0
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
          round: 1,
          duration: 1800
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

      setInterval(() => {
        self.iterateBots()
      }, 300)
    }
  }
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .container {
    width: 100%;
    margin-top: 40px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
