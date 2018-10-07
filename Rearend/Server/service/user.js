'use strict';


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
 * 登录并返回用户身份
 * 登录并返回用户身份
 *
 * id String 学号或工号或其他字符串
 * passowrd String MD5加密后的结果
 * returns Userinfo
 **/
exports.userLoginPOST = function(id,passowrd) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "周树人",
  "usertype" : "",
  "id" : "16041519"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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

