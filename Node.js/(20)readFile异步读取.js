//加载node模块
const fs=require('fs');//创建文件模块

file='test20.txt';

//异步读取，异步带回调函数function
fs.readFile(file,function(err,data){
	str=data.toString();//把他的内容打印出来
	console.log(str);
});

console.log('file read end!');//会先输出这一句

