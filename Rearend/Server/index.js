const express = require("express")
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const createError = require("http-errors")
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const config = require("./config.json")

const mainRouter=require("./routes/index")
const userRouter = require("./routes/user")
const docRouter = require('./routes/doc')

const app = express()
// 静态目录
app.use(express.static(config.static))

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 使用中间件
app.use(logger('dev'))
// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(session({
    // redis可能被玩坏了，明天我部署一个docker版的再开，暂时存在内存
    // store: new RedisStore(config.session),
    secret: 'marx',
    resave: true,
    saveUninitialized: true
  }));

// 使用路由
app.use("/",mainRouter)
app.use("/api/user", userRouter)
app.use('/doc', docRouter)

// 错误处理
app.use(function (req, res, next) {
    createError(404)
    next()
})
app.use(function (err, req, res, next) {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    // render the error page
    let status = err.message == "Not Found" ? 404 : 500
    res.status(status)
    res.send({
        code: status,
        info: err.message
    })
})

// 监听端口
app.listen(config.port)