//加载node模块
const fs=require('fs');//创建文件模块

file='test21.txt';

str='1111\n2222\n3333\n4444\n5555\n6666';

//写入
fs.writeFile(file,str);

console.log('file write end!');

