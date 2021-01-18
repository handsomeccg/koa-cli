const Router = require('koa-router')
const router = new Router()
const userCtl = require('../controllers/userController')


router.post('/user/add', userCtl.addUser)

module.exports = router