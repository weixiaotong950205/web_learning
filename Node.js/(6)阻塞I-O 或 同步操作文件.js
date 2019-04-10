//加载fs file模块
const fs=require('fs');


//开始读取文件
console.log('file start!');


//正在读取文件
data=fs.readFileSync('test.txt');//同步读取
console.log(data.toString());

//读取文件结束
console.log('file end!');