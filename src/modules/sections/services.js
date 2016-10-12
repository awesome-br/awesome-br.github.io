import http from '../../services/http'

export const getList = () => http.get('/data/sections.json').then(response => response.data)
export const getLinks = key => http.get(`/data/sections/${key}.json`).then(response => response.data)
