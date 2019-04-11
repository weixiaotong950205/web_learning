//加载node模块
const util=require('util');//加载模块

show=function(){
	console.log('xyy');
}

console.log(util.isFunction(show));//判断是否是函数