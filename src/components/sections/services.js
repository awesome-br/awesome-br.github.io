import http from '../../services/http'

export const getList = () => http.get('/data/sections.json').then(response => response.data)
