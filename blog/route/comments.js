const express = require('express')
const router = express.Router()
const checkLogin = require('./../middlewares/check').checkLogin
const {query, queryValues} = require('./../public/mysql')

// POST /comments 创建一条留言
router.post('/', function (req, res, next) {
  queryValues('insert into comment (article_id, message) value (?,?)', [req.body.article_id, req.body.message], (err, results) => {
    res.json({
      resultCode: 200,
      success: true,
      resultMessage:'发送成功'
    })
  })
})
// get /comments/getComments 获取当前文章的留言
router.post('/getComments', function (req, res, next) {
  queryValues('select message from comment where article_id = ?', [req.body.article_id], (err, results) => {
    let arry = []
    results.forEach((element, index) => {
      arry[index] = element.message
    });
    // console.log(results, arry)
    res.json({
      resultCode: 200,
      success: true,
      resultMessage:'发送成功',
      data: arry
    })
  })
})

// GET /comments/:commentId/remove 删除一条留言
router.get('/:commentId/remove', checkLogin, function (req, res, next) {
  res.send('删除留言')
})

module.exports = router