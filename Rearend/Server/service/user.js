'use strict';
const user=require("../models/user")

/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:20点44分
 * 获取用户权限
 *
 * no response value expected for this operation
 **/
exports.userGet_powerGET = function(type) {
  return new Promise(async function(resolve, reject) {
    let data = await user.getPower(type)
    resolve(data);
  });
}


/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:16点41分
 * 
 * 登录并返回用户身份
 *
 * id String 学号或工号或其他字符串
 * passowrd String MD5加密后的结果
 * returns Userinfo
 **/
exports.userLoginPOST = function(id,password) {
  return new Promise(async function(resolve, reject) {
    let params=await user.login(id,password)
    if(params.status==1){
      let type=await user.getType(id)
      params.info.type=type
      resolve(params)
    }else{
      resolve(params)
    }
  });
}


/**
 * 注销登录
 * 注销登陆
 *
 * no response value expected for this operation
 **/
exports.userLogoutPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 修改密码
 * 修改密码
 *
 * id String 学号或工号或其他字符串
 * neo_passowrd String MD5加密后的结果
 * returns ActionState
 **/
exports.userModify_passwordPOST = function(id,neo_passowrd) {
  return new Promise(async function(resolve, reject) {
    let data=await user.modifyPassword(id,neo_passowrd)
    resolve(data)
  });
}


/**
 * 创建用户
 * 创建用户
 *
 * no response value expected for this operation
 **/
exports.userSignupPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

