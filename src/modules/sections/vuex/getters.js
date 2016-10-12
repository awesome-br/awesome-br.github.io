export const hasList = ({ list }) => list.length > 0
export const sectionData = ({ current, list }) => list.find(x => x.url === current)
