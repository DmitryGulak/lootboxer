export default {
  state: {
    points: 100,
    bots: 1
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
    }
  },
  actions: {
    iterateBots ({commit, state}) {
      commit('addPoints', state.bots)
    }
  }
}
