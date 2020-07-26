var schedule = require('node-schedule')
const getBiyingBg = require('./bgimg')
const getByBg = function () {
    schedule.scheduleJob('0 0 0 * * *', function(){
        getBiyingBg()
    })
}
module.exports = {
    getByBg
}