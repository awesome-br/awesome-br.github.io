import * as types from './mutations-types'
import { getList } from '../services'

export const loadSections = ({ commit, state }) => {
  return getList()
    .then(data => commit(types.SET_LIST, data))
}
