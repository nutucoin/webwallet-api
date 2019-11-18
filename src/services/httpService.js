const request = require('request')

const username = 'efrhjpsohjwoproj'
const password = 'wegwrhpowhpojwrp'

function getBody(method, params = []) {
  return {
    jsonrpc: '1.0',
    id: 1,
    method,
    params
  }
}

function getOptions(body) {
  return {
    url: 'http://127.0.0.1:4992',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    auth: {
      username,
      password
    },
    body,
    json: true
  }
}

function get(method, params, cb) {
  const options = getOptions(getBody(method, params))

  return request(options, cb)
}

module.exports = {
  get
}
