<template>
  <div>
    <ul>
      <li v-for="(count, item) in playerItems">{{item}} ({{count}})</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'player-items',
    computed: {
      'playerItems': {
        get () { return this.$store.state.player.items }
      },
      'itemData': {
        get () { return this.$store.state.lootbox.items }
      }
    }
  }
</script>
