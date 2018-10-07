const app = require("express").Router()
const service=require("../service/user")



app.get('/', (req, res, next)=>{
    service.userSignupPOST()
        .then((response)=>{
            res.end(response)
        })
        .catch(()=>{
            res.end({
                "status":1,
                "info":"操作失败"
            })
        })
  });

module.exports = app;