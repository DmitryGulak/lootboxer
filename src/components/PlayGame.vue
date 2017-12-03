<template>
  <div class="click-page">
    <button @click="handlePlay(1)" class="big-btn">WALK</button>
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
