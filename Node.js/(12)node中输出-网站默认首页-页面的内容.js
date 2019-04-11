const http=require('http');
const url=require('url');
const fs=require('fs');//读文件


cs=function(req,res){
	uri=req.url;
	if(uri!=='/favicon.ico'){
		path=url.parse(uri).pathname;
		switch(path){
			case "/user/add"://增
				res.write('<h1>user add</h1>');
				break;
			case "/user/delete"://删
				res.write('<h1>user delete</h1>');
				break;
			case "/user/update"://改
				res.write('<h1>user update</h1>');
				break;
			case "/user/select"://查
				res.write('<h1>user select</h1>');
				break;
			default://l浏览器输入别的任何的页面，就跳往首页
				data=fs.readFileSync('index.html')//往出读
				str=data.toString();//读完转成字符串
				res.write(str);//数据读到客户端的浏览器上去，这里输不上去了就报错了
				break;
		}

	}
	
	res.end();//客户端程序响应已经完毕了，上面的代码还没读完，所以要用同步读取文件
}

http.createServer(cs).listen(8888);
console.log('server is ok!');