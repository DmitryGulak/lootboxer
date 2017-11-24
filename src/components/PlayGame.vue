<template>
  <div class="click-page">
    <button @click="handlePlay(1)" class="big-btn" v-if="points < 50">WALK</button>
    <button @click="handlePlay(5)" class="big-btn" v-if="points >= 50 && points < 200">SHOOT</button>
    <button @click="handlePlay(10)" class="big-btn" v-if="points >= 200 && points < 500">REGENERATE</button>
    <button @click="handlePlay(15)" class="big-btn" v-if="points >= 500 && points">SEARCH CONTENT</button>
  </div>
</template>

<script>
  export default {
    name: 'ClickPage',
    computed: {
      'points': {
        get () { return this.$store.state.player.points }
      }
    },
    methods: {
      handlePlay (count) {
        this.$store.commit('addPoints', count)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
