<template>
  <div class="open-page">
    <ul class="lootbox-list">
      <li v-for="(data, box) in boxes">
        <button v-if="data.cost <= playerPoints" @click="handleOpen(data)">{{box}} ({{data.cost}})</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'OpenBox',
    computed: {
      'boxes': {
        get () { return this.$store.state.lootbox.list }
      },
      'playerPoints': {
        get () { return this.$store.state.player.points }
      }
    },
    methods: {
      ...mapActions(['openBox']),
      handleOpen (data) {
        this.openBox(data)
      }
    }
  }
</script>
