const path = require('path')
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.168.72:3000/', // 公司
        // target: 'http://192.168.0.104:3000', // 家里
        ws: true,
        changeOrigin: true,
        pathRewrite: {
        '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      }
    }
  }
}