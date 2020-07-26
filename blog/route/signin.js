const express = require('express')
const router = express.Router()
const checkNotLogin = require('./../middlewares/check').checkNotLogin

router.get('/', checkNotLogin, (req, res) => {
    res.send('注册页')
})
// POST /signup 用户注册
router.post('/', checkNotLogin, function (req, res, next) {
    res.send('注册')
})

module.exports = router