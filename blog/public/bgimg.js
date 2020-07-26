const superagant = require('superagent')
const cheerio = require('cheerio')
const {query} = require('./mysql')

function getBiyingBg () {
    getCnodejs().then(res => {
        let $ = cheerio.load(res.text)
        let byImgUrl = `https://cn.bing.com${$('#bgImgProgLoad').attr('data-ultra-definition-src')}`
        console.log(byImgUrl)
        
        query(`UPDATE user set byimg = '${byImgUrl}'`, (err, results) => {
            console.log(err, results)
        })
    }).catch(err => {
    
    })
}
async function getCnodejs () {
    try {
        return await superagant.get('https://cn.bing.com/?mkt=zh-CN')
    } catch(err) {
        console.log(err)
    }
}
module.exports = getBiyingBg