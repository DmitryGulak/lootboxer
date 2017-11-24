<template>
  <div id="app">
    <div :class="{
      'new-item-message': true,
      'active': showMessage
    }">
      <h1>You got:</h1><br>
      <h2>{{itemName}}</h2>
    </div>
    <div class="container">
      <ul class="game-menu">
        <li>
          <router-link class="menu-btn" :to="{name: 'PlayGame'}">Play</router-link>
        </li>
        <li>
          <router-link class="menu-btn" :to="{name: 'OpenBox'}">Open lootbox</router-link>
        </li>
      </ul>
      <h3 class="points-label">{{points}} coins</h3>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { EventBus } from './event-bus.js'
  export default {
    name: 'app',
    data () {
      return {
        showMessage: false,
        itemName: 'some item'
      }
    },
    computed: {
      'points': {
        get () { return this.$store.state.player.points }
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
