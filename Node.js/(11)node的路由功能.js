const http=require('http');
const url=require('url');//专门解析url

cs=function(req,res){//req客户请求
	uri=req.url;
	if(uri!=='/favicon.ico'){//去掉/favicon.ico这句没用的显示
		//路由:根据浏览器访问地址不同，根据路由，发生以下各种事情
		path=url.parse(uri).pathname;//把uri解析;以下为了得到域名的/user/***
		switch(path){
			case "/user/add"://增
				res.write('<h1>user add</h1>');//给客户反应东西
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
			default:
				res.write('<h1>index page</h1>');//不符合上面的，就让他去首页
				break;
		}

		//console.log(uri);//这句是往终端上输入的
		//res.write('hello world!');//给客户端浏览器上写的东西---res是响应
	}
	
	res.end();
}

http.createServer(cs).listen(8888);
console.log('server is ok!');