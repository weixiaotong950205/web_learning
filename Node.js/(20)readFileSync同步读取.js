//加载node模块
const fs=require('fs');//创建文件模块

file='test20.txt';

//同步读取：单线程，容易阻塞
data=fs.readFileSync(file);

str=data.toString();//把他的内容打印出来

console.log(str);