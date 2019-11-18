const http = require('../services/httpService')

function getnewaddress(req, res) {
  http.get('getnewaddress', [], (error, response, body) => {
    const address = body.result

    http.get('dumpprivkey', [address], (error, response, body) => {
      const privateKey = body.result

      res.json({ address, privateKey })
    })
  })
}

module.exports = {
  getnewaddress
}
