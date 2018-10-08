import request from "./request"

const domin=require("./config.json").domin

export async function login(id,password){
    let response=await request('post',`${domin}/api/user/login`,{
        id:id,
        password:password
    })
    return response
}