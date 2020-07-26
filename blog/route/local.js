const express = require('express')
const router = express.Router()
// 查询可抽奖次数
router.get('/', (req, res) => {
    let data = {
        "code": "200",
        "message": "成功",
        "successful": "true",
        "surpluslotterytimes": "1",
        "totallotterytimes": "1",
        "totalwintimes": "1",
        "usedlotterytimes": "1",
    }
    // 处理jsonp
    res.end(`callback(${JSON.stringify(data)})`)
})
// 我的奖品
router.get('/winprize', (req, res) => {
    // res.jsonp({
    //     code: 200,
    //     message: '成功',
    //     successful: true,
    //     list: [
    //         {
    //             conversionFlag: 1,
    //             expirationDate: '',
    //             lotteryId: '',
    //             previewUrl: '',
    //             prizeId: '',
    //             prizeName: '',
    //             whetherExpiration: ''
    //         }
    //     ]
    // })
    let data = {
        code: 200,
        message: '成功',
        successful: true,
        list: [
            {
                conversionFlag: 1,
                expirationDate: '',
                lotteryId: '',
                previewUrl: '',
                prizeId: '',
                prizeName: '',
                whetherExpiration: ''
            }
        ]
    }
    // 处理jsonp
    res.end(`callback(${JSON.stringify(data)})`)
})
// 用户抽奖
router.get('/lottery', (req, res) => {
    // res.jsonp({
    //     code: 200,
    //     message: '成功',
    //     successful: true,
    //     lotteryFlag: false,
    //     activityId: '',
    //     expirationDate: '',
    //     previewUrl: '',
    //     prizeId: '',
    //     prizeLevel: '',
    //     prizeName: '111'
    // })
    let data = {
        code: 200,
        message: '成功',
        successful: true,
        lotteryFlag: false,
        activityId: '',
        expirationDate: '2020-01-01',
        previewUrl: '',
        prizeId: '',
        prizeLevel: '1',
        prizeName: 'daishen',
        prizeCode: "hahaha"
    }
    // 处理jsonp
    res.end(`callback(${JSON.stringify(data)})`)
})
module.exports = router