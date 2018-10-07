'use strict';
const user=require("../models/user")

/**
 * 获取用户权限
 * 获取用户权限
 *
 * no response value expected for this operation
 **/
exports.userGet_powerGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Author:姜佐腾
 * Date:2018年10月7日
 * Time:16点41分
 * 
 * 登录并返回用户身份
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
      console.log(type)
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
    "status" : 0,
    "info" : "发送操作请求成功"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

