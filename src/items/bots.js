export default {
  '1 bot': {
      cost: 10,
      type: 'bot',
      rarity: 0.8,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 1, {root: true})
      }
  },
  '2 bots': {
      cost: 20,
      type: 'bot',
      rarity: 0.8,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 2, {root: true})
      }
  },
  '5 bots': {
      cost: 50,
      type: 'bot',
      rarity: 0.5,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 5, {root: true})
      }
  },
  '10 bots': {
      cost: 100,
      type: 'bot',
      rarity: 0.5,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 10, {root: true})
      }
  },
  '13 bots': {
      cost: 130,
      type: 'bot',
      rarity: 0.5,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 13, {root: true})
      }
  },
  '20 bots': {
      cost: 200,
      type: 'bot',
      rarity: 0.5,
      action (state, rootState, dispatch, commit) {
        commit('addBots', 20, {root: true})
      }
  },

}
