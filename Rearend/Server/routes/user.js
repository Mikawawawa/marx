const app = require("express").Router()
const user= require('../service/user')

app.get('/',(req,res,next)=>{
    res.send({
        status:0,
        info:"USER ROUTER!"
    })
})
/**
 * 业务流程：
 * 1、验证密码正确性，并获取身份
 * 2、获取身份对应的权限，并返回给前端
 * 3、在redis-session中注册该用户
 */
app.post('/login', async (req, res, next)=>{
    let params=await user.userLoginPOST(12,34)
    res.send(params)

  });

module.exports = app;