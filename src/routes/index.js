const { Router } = require('express')
const authController = require('../controllers/authController')

const router = Router()

router.get('/getnewaddress', authController.getnewaddress)

module.exports = router
