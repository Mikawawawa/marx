const express = require("express")
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const createError = require("http-errors")

const config = require("./config.json")

const mainRouter=require("./routes/index")
const userRouter = require("./routes/user")
const docRouter = require('./routes/doc')

const app = express()

// 使用路由
app.use("/",mainRouter)
app.use("/api/user", userRouter)
app.use('/doc', docRouter)

// 静态目录
app.use(express.static(config.static))

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 使用中间件
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())

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