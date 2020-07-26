const express = require('express')
const path = require('path')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const bodyParser = require('body-parser')
const routes = require('./route')
const pkg = require('./package')
const app = express()
const {getByBg} = require('./public/setTimeout')
getByBg()
// app.set('views', path.join(__dirname, 'views')) // 设置存放模板文件的目录
// app.set('view engine', 'ejs')// 设置模板引擎为 ejs
// 设置静态文件目录
// app.use(express.static(path.join(__dirname, 'public')))
// session 中间件
// app.use(session({
//     name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
//     secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
//     resave: true, // 强制更新 session
//     saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
//     cookie: {
//       maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
//     },
    // store: new MongoStore({// 将 session 存储到 mongodb
    //   url: config.mongodb// mongodb 地址
    // })
// }))
  // flash 中间件，用来显示通知
// app.use(flash())
// 路由


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 上面两个需要在app.use(路由)的前面。不然获取不到数据 
routes(app)


// 监听端口，启动程序
app.listen(3000, function () {
  console.log(`${pkg.name} listening on port ${config.port}`)
})