export default {
  'shity lootbox': {
    cost: 100,
    items: [
      {
        name: '1 bot',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 1, {root: true})
        }
      },
      {
        name: '2 bots',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 1, {root: true})
        }
      },
      {
        name: '130 coins',
        action (state, rootState, dispatch, commit) {
          commit('addPoints', 130, {root: true})
        }
      }
    ]
  },
  'normal lootbox': {
    cost: 1000,
    items: [
      {
        name: '10 bots',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 5, {root: true})
        }
      },
      {
        name: '5 bots',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 5, {root: true})
        }
      },
      {
        name: '1300 coins',
        action (state, rootState, dispatch, commit) {
          commit('addPoints', 1300, {root: true})
        }
      }
    ]
  }
}
