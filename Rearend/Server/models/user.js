const connection=require("./connect")

exports.login=async function(id,password) {
    return new Promise(async function(resolve, reject) {
        connection.query('SELECT * FROM `USER` WHERE `id` = ?',[id],async (error, results, fields)=>{
            results=JSON.parse(JSON.stringify(results))
            if(error){
                resolve({
                    status:0,
                    info:"ACTION ERROR!"
                  })
            }else if(typeof(results[0])=='undefined'){
                resolve({
                    status:0,
                    info:"NOT FOUND!"
                })
            }else if(results[0].PASSWORD==password){
                resolve({
                    status:1,
                    info:{
                        id:id,
                        type:""
                    }
                })
            }else{
                console.log(results)    
                resolve({
                    status:0,
                    info:"UNKNOW ERROR"
                })
            }
        })
      });
}

exports.getType=async function(id){
    return new Promise(async function(resolve,reject){
        connection.query('SELECT type FROM `USER_TYPE` WHERE `user` = ?',[id],async (error,results,fields)=>{
            if(error){
                console.log("ERROR",error)
                resolve()
            }else{
                let data=await getAllType()
                results.forEach(element => {
                    data[element.type]=true    
                });
                resolve(data)
            }
        })
    })
}

exports.getAllType=getAllType
async function getAllType(){
    return new Promise(async function(resolve,reject){
        connection.query('SELECT distinct id FROM `TYPE`',(error,results)=>{
            if(error)
                resolve([])
            else{
                let data={}
                results.forEach(element => {
                    data[element.id]=false
                });
                resolve(data)
            }
        })
    })
}
