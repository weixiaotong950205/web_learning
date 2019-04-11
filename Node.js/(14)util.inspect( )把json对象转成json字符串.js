//加载node模块
const util=require('util');//加载模块

obj={'name':'user1','age':'20'};

//inspect把json转成字符串
console.log(util.inspect(obj));//把json打印到客户端的浏览器上去
console.log(typeof(util.inspect(obj)));//这里就是一个json字符串了