export default {
  'shitty left sock': {
    cost: 10,
    type: 'collectable',
    rarity: 0.3,
    action (state, rootState, dispatch, commit) {
      dispatch('handleAddItem', 'shitty left sock', {root: true})
    }
  },
  'shitty right sock': {
    cost: 15,
    type: 'collectable',
    rarity: 0.001,
    action (state, rootState, dispatch, commit) {
      dispatch('handleAddItem', 'shitty right sock', {root: true})
    }
  },
  'piece of game disc': {
    cost: 50,
    type: 'collectable',
    rarity: 0.2,
    action (state, rootState, dispatch, commit) {
      dispatch('handleAddItem', 'piece of game disc', {root: true})
    }
  }
}
