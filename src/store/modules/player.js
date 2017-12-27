export default {
  state: {
    points: 1,
    bots: 1,
    items: {}
  },
  mutations: {
    addPoints (state, count) {
      state.points += count
    },
    subtractPoint (state, count) {
      state.points -= count
    },
    addBots (state, count) {
      state.bots += count
    },
    addItem (state, item) {
      state.items[item] = 1
    },
    incrementItem (state, item) {
      state.items[item] += 1
    },
    resetPlayer (state) {
      state.points = 0
      state.bots = 1
      state.items = {}
    }
  },
  actions: {
    iterateBots ({commit, state}) {
      commit('addPoints', state.bots)
    },
    handleAddItem ({commit, state}, itemName) {
      console.log(itemName in state.items)
      if (itemName in state.items) {
        commit('incrementItem', itemName)
      } else {
        commit('addItem', itemName)
      }
    }
  }
}
