import * as types from './mutations-types'

export default {
  [types.SET_LIST] (state, list) {
    state.list = list
  },
  [types.SET_CURRENT] (state, current) {
    state.current = current
  },
  [types.SET_LINKS] (state, links) {
    state.links = links
  }
}
