import * as types from './mutations-types'

export default {
  [types.SET_LIST] (state, list) {
    state.list = list
  }
}
