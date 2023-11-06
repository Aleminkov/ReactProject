const Router = require('express')

const router = new Router()

router.get('/check')
router.post('/register')
router.post('/login')

module.exports = router