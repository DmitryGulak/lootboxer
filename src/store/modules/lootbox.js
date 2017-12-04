import boxes from '../../boxes'
import items from '../../items'
import { EventBus } from '../../event-bus.js'

function getRandomArbitrary (min, max) {
  return Math.random() * (max - min) + min
}

function weightedRand(spec) {
  var i, j, table=[];
  for (i in spec) {
    // The constant 10 below should be computed based on the
    // weights in the spec for a correct and optimal table size.
    // E.g. the spec {0:0.999, 1:0.001} will break this impl.
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}

export default {
  state: {
    items: items,
    list: {
      ...boxes
    }
  },
  actions: {
    openBox ({ commit, dispatch, state, rootState }, box) {
      let specs = {}
      for (let key of box.items) {
        let item = state.items[key]
        specs[key] = item.rarity
      }
      let randItem = weightedRand(specs)()
      let itemData = state.items[randItem]
      console.log(randItem)
      EventBus.$emit('show-new-item', randItem)
      commit('subtractPoint', box.cost, {root: true})
      itemData.action(state, rootState, dispatch, commit)
    }
  }
}
