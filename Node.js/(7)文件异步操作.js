//加载fs file模块
const fs=require('fs');
file='test.txt';

//开始读取文件
console.log('file start!');


//正在读取文件
//自带事件(当文件内容读取完毕时，再输出data内容)
data=fs.readFile(file,function(err,data){//异步读取带有回调函数
	console.log(data.toString());
});//readFile异步读取:先输出file start+file end---再输出data内容


//读取文件结束
console.log('file end!');