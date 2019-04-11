//web模块
path=require('path');

pobj={ 
	root: '/',
    dir: '/user/local/www',
    base: 'index.sh',
    ext: '.sh',
    name: 'index' 
};


str=path.format(pobj);//把路径对象转成路径字符串

str2=str.replace('\\','/');// www后面的\要变成/, \需要转译
console.log(str2);



