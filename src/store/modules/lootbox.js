import boxes from '../../boxes'
import { EventBus } from '../../event-bus.js'

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

export default {
  state: {
    list: {
      ...boxes
    }
  },
  actions: {
    openBox ({ commit, dispatch, state, rootState }, box) {
      const randIndex = parseInt(getRandomArbitrary(0, box.items.length))
      const randItem = box.items[randIndex]
      EventBus.$emit('show-new-item', randItem.name)
      commit('subtractPoint', box.cost, {root: true})
      randItem.action(state, rootState, dispatch, commit)
      return true
    }
  }
}
