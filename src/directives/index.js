import geopattern from './geopattern'

const install = Vue => {
  Vue.directive('geopattern', geopattern)
}

export default { install }
