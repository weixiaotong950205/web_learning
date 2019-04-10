//加载http web模块
 const http=require('http');

 cs=function(req,res){
 	res.writeHead('200',{'content-type':'text/html;charset=utf-8'});//加上这一句，在浏览器localhost:666中中文显示就不会乱码了,就相当于html中加上这句话<meta charset='utf-8'>
 	res.write('<h1>我是小圆圆，你是小阳阳吗？</h1>');
 	res.end();//这句话不加的话，浏览器就会一直在响应，一直在转；
 }

 http.createServer(cs).listen(666);

 console.log('http is ok!');
 //端口在占用中；要先结束上一个的node进程，ctrl+shift+esc打开任务浏览器，关闭进程