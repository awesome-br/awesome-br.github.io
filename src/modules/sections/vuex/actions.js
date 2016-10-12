import * as types from './mutations-types'
import { getList, getLinks } from '../services'

export const loadSections = ({ commit }) => {
  return getList()
    .then(data => commit(types.SET_LIST, data))
}

export const setCurrent = ({ commit, getters }, key) => {
  commit(types.SET_CURRENT, key)

  const run = () => getLinks(key).then(data => commit(types.SET_LINKS, data))

  return getters.hasList
    ? run()
    : loadSections({ commit }).then(() => run())
}

export const cleanCurrent = ({ commit }) => {
  commit(types.SET_LINKS, [])
  commit(types.SET_CURRENT, '')
}
