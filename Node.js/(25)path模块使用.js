//web模块
path=require('path');

str='/user/local/www/index.sh';//拽一个路径过来

//dname=path.dirname(str);//路径
//dname=path.basename(str);//文件部分
//dname=path.extname(str);//后缀--.sh
//dname=path.parse(str);//解析
dname=path.dirname(str);

console.log(dname);



