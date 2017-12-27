export default {
  '1 will': {
    cost: 10,
    type: 'bot',
    rarity: 0.8,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 1, {root: true})
    }
  },
  '2 wills': {
    cost: 20,
    type: 'bot',
    rarity: 0.8,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 2, {root: true})
    }
  },
  '5 wills': {
    cost: 50,
    type: 'bot',
    rarity: 0.5,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 5, {root: true})
    }
  },
  '10 wills': {
    cost: 100,
    type: 'bot',
    rarity: 0.5,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 10, {root: true})
    }
  },
  '13 wills': {
    cost: 130,
    type: 'bot',
    rarity: 0.5,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 13, {root: true})
    }
  },
  '20 wills': {
    cost: 200,
    type: 'bot',
    rarity: 0.5,
    action (state, rootState, dispatch, commit) {
      commit('addBots', 20, {root: true})
    }
  }
}
