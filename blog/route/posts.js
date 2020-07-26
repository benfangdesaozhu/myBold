const express = require('express')
const router = express.Router()
const { 
    query,
    queryValues
} = require('./../public/mysql')
const checkLogin = require('./../middlewares/check').checkLogin

// /posts  文章全部列表
// 分页
router.post('/', (req, res) => {
    let sql
    console.log(req.body)
    sql = req.body.catefory_id ? `select * from article where category_id=${req.body.catefory_id}` : 'select * from article'
    
    query(sql,(err, results) => {
        let total = Math.ceil(results.length / req.body.pageSize)
        sql = `${sql} limit ${req.body.pageSize*(req.body.page - 1)} , ${req.body.pageSize}`
        query(sql,(err, results) => {
            res.json({
                resultCode: 200,
                success: true,
                resultMessage:'文章获取成功',
                data: {
                    list: results,
                    total
                }
            })
        })
    })
    
})
// /posts/create 新增文章
// router.post('/create', checkLogin, (req, res) => {
router.post('/create', (req, res) => {
    // res.send('创建文章')
    let {article_title, category_id, time, article_content} = req.body
    
    queryValues('insert into article (article_title, category_id, time, article_content) values (?,?,?,?)', 
        [article_title, category_id, time, article_content], 
        () => {
            res.json({
                resultCode: 200,
                success: true,
                resultMessage:'发表文章成功'
            })
        }
    )
})
// /posts/details 文章详情页
router.post('/details', (req, res) => {
    let sql = `select * from article where article_id = ${req.body.article_id}`
        // 需要插入观看数
    queryValues('select watch_count from article where article_id = ?', [req.body.article_id], (err, results) => {
        // console.log('查看观看数', results)
        let count = results[0].watch_count || 0
        queryValues('update article set watch_count=? where article_id = ?', [++count, req.body.article_id], (err, results) => {
        // console.log('插入', results)
            query(sql, (err, results) => {
                res.json({
                    resultCode: 200,
                    success: true,
                    resultMessage:'文章获取成功',
                    data: results
                })
            })
        })
    })
})
// /posts/giveGood 点赞文章
router.post('/giveGood', (req, res) => {
    queryValues('select * from article where article_id=?',[req.body.article_id],
        (err, results) =>{
            queryValues('update article set good_count=? where article_id=?', [++results[0].good_count, req.body.article_id], (error, result)=>{
                res.json({
                    resultCode: 200,
                    success: true,
                    resultMessage: '点赞成功'
                })
            })
        }
    )
})
// /posts/update 更新一篇文章
router.post('/update', (req, res) => {
    queryValues(`select * from article where article_id=?`, [req.body.article_id],
        (err, results) =>{
            let {article_title, category_id, time, article_content} = {
                ...results[0],
                ...req.body,
            }
            queryValues('update article set article_title=?, category_id=?, time=?, article_content=? where article_id=?', 
            [article_title, category_id, time, article_content, req.body.article_id], (err, results)=>{
                res.json({
                    resultCode: 200,
                    success: true,
                    resultMessage: '更新成功'
                })
            })
        }
    )
})
// /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function (req, res, next) {
    res.send('删除文章')
})
  
module.exports = router