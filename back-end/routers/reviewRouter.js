const Router = require('express')

const router = new Router()

router.get('/getReview')
router.post('/addReview')

module.exports = router