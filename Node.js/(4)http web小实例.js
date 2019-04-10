//加载http web模块
 const http=require('http');

 cs=function(req,res){
 	res.write('hello world!');
 	res.end();
 }

 http.createServer(cs).listen(666);

 console.log('http is ok!');
 //这样通过浏览器，打开localhost:666,就会出现http is ok!