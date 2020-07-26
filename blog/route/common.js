const express = require('express')
var path=require('path');
const {query} = require('./../public/mysql')
const multer  = require('multer')
const router = express.Router()
const upload = multer({ dest: 'route/uploadImg/' });
// 分类
router.get('/category', (req, res) => {
    query('select category_id,category_name from category', (err, results) => {
        res.json({
            resultCode: 200,
            success: true,
            resultMessage:'获取成功',
            data: results
        })
    })
})

// 上传图片
router.post('/uploadImg', upload.single('imgFile'), (req, res) => {
    var file = req.file;

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    url = '/api/common/uploadImg/' + file.filename;  
      // 'http://' + req.headers.host + 
    res.send({ resultCode: '1', url });
})
router.get('/uploadImg/*',(req,res,next)=>{
    var defpath=path.join(__dirname,'../');
    console.log(__dirname + req.url)
    res.sendFile(__dirname + req.url);
})
module.exports = router