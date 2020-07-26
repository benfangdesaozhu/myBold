const express = require('express')
const router = express.Router()
const {query} = require('./../public/mysql')

router.get('/byimg', (req,res) => {
    console.log(req, res, req.body)
    query(`select byimg from user where userid=1`, (err, results) => {
        console.log(err, results)
        res.json({
            resultCode: 200,
            success: true,
            resultMessage:'获取成功',
            data: {
                byimg: results[0]
            }
        })
    })
})
router.post('/',(req, res) => {
    console.log(req, res, req.body)
    query(`SELECT password from user WHERE username=${req.body.username}`, (err, results) => {
        console.log(err, results)
        if(!results.length) { // 不存在
            query(`insert into user (username, password) values(${req.body.username}, ${req.body.password})`, (err, results) => {
                console.log(err, results)
                res.json({
                    resultCode: 200,
                    success: true,
                    resultMessage:'登录成功',
                    data: {
                        access_token: 1231
                    }
                })
            })
        } else {
            if (req.body.password === results[0].password) {
                res.json({
                    resultCode: 200,
                    success: true,
                    resultMessage:'登录成功',
                    data: {
                        access_token: 2131
                    }
                })
            } else {
                res.json({
                    resultCode: 202,
                    success: false,
                    resultMessage:'密码不正确',
                    data: {
                        access_token: 3213
                    }
                })
            }
        }

    })
})
module.exports = router