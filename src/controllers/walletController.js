const http = require('../services/httpService')

function importprivkey(req, res) {
  http.get('importprivkey', [], (error, response, body) => {

  })
}

module.exports = {
  importprivkey
}
