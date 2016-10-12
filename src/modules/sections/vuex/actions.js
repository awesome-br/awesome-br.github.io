import * as types from './mutations-types'
import { getList, getLinks } from '../services'

export const loadSections = ({ commit }) => {
  return getList()
    .then(data => commit(types.SET_LIST, data))
}

export const setCurrent = ({ commit }, key) => {
  commit(types.SET_CURRENT, key)

  return getLinks(key)
    .then(data => commit(types.SET_LINKS, data))
}
