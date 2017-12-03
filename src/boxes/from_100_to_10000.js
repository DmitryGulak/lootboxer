export default {
  'shity lootbox': {
    cost: 100,
    styleClass: 'shity',
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
      }
    ]
  },
  'not shity lootbox': {
    cost: 1000,
    styleClass: 'not-shity',
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
      }
    ]
  },
  'wood lootbox': {
    cost: 5000,
    styleClass: 'wood',
    items: [
      {
        name: '20 bots',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 5, {root: true})
        }
      },
      {
        name: '13 bots',
        action (state, rootState, dispatch, commit) {
          commit('addBots', 5, {root: true})
        }
      }
    ]
  }
}
