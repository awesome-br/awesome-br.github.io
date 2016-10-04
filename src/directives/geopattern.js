import GeoPattern from 'geopattern'

const setPattern = (el, value) => {
  const pattern = GeoPattern.generate(value, {
    generator: 'squares'
  })
  el.style['background-image'] = pattern.toDataUrl()
}

export default {
  bind (el, binding) {
    setPattern(el, binding.value)
  },
  update (el, binding) {
    const value = binding.value
    const oldValue = binding.oldValue

    if (value !== oldValue) {
      setPattern(el, value)
    }
  }
}
