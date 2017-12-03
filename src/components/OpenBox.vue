<template>
  <div class="open-page">
    <ul class="lootbox-list">
      <li v-for="(data, box) in boxes" v-bind:class="['box', data['styleClass']]" v-if="data.cost <= playerPoints">
        <button @click="handleOpen(data)"><span>{{box}}</span> <span class="cost">{{data.cost}}</span></button>
        <ul>
          <li v-for="item in data['items']">{{item.name}}</li>
        </ul>
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
