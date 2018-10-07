const connection=require("./connect")

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:17点32分
 * Description:验证账号密码对应关系
 */
exports.login=async function(id,password) {
    return new Promise(async function(resolve, reject) {
        connection.query('SELECT PASSWORD FROM `USER` WHERE `id` = ?',[id],async (error, results, fields)=>{
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
                resolve({
                    status:0,
                    info:"MATCHING ERROR"
                })
            }
        })
      });
}

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:17点32分
 * Description:根据用户id获取用户类型
 */
exports.getType=async function(id){
    return new Promise(async function(resolve,reject){
        connection.query('SELECT type FROM `USER_TYPE` WHERE `user` = ?',[id],async (error,results,fields)=>{
            if(error){
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

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:17点32分
 * Description:获取全部用户类型
 */
exports.getAllType=getAllType
async function getAllType(){
    return new Promise(async function(resolve,reject){
        connection.query('SELECT distinct id FROM `TYPE`',(error,results)=>{
            if(error)
                // return
                resolve([])
            else{
                let data={}
                results.forEach(element => {
                    data[element.id]=false
                });
                resolve(data)
                // return data
            }
        })
    })
}

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:22点07分
 * Description:根据用户类型获取权限
 */
exports.getPower=async function(type){
    return new Promise(async (resolve,reject)=>{
        //获取全部权限
        let powers=await connection.execute('SELECT * FROM `POWER`')
        console.log(powers)
        if(powers.status==1){
            let list={}
            powers.info.forEach(element => {
                list[element.ID]=false                
            });
            // 逐个type子项查找拥有的权限
            for(element in type){
                let data=await connection.execute('SELECT * FROM `TYPE_POWER` WHERE `type`=?',[element])            
                if(data.status==1){
                    console.log(data)
                    data.info.forEach(element=>{
                        list[element.POWER]=true
                    })
                }
            }
            resolve({
                status:1,
                info:list
            })
        }else{
            resolve(powers)
        }
    })
}

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:22点44分
 * Description:根据用户类型获取权限
 */
exports.modifyPassword=async function(id,password){
    let data=await connection.execute("UPDATE `marx`.`USER` SET `PASSWORD` = ? WHERE `ID` = ?",[password,id])
    return {
        status:1,
        info:"EXECUTE DOWN!"
    }
}