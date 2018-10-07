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
    let params=await user.userLoginPOST(req.body.id,req.body.password)
    if(params.status==1){
        req.session.id=req.body.id
        req.session.type=params.info.type
        console.log(req.session.type)
    }
    res.send(params)
  });

  /**
   * 业务流程
   * 1、根据session中拥有的用户类型，获取权限列表
   * 2、在session中写入
   */
app.get('/get_power',async (req,res,next)=>{
    if(typeof(req.session.type)!="undefined"){
        let powers=await user.userGet_powerGET(req.session.type)
        if(powers.status==1)
            req.session.powers=powers.info
        res.send(powers)

    }else{
        res.send({
            status:0,
            info:"HAS NOT LOGINED"
        })
    }

})


/**
 * 业务流程
 * 1、根据传入的id和新密码，更改用户表信息
 */
app.post('/modify_password',async (req,res,next)=>{
    let info=await user.userModify_passwordPOST(req.body.id,req.body.neo_password)
    res.send(info)
})
module.exports = app;