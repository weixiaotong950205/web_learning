//web模块
http=require('http');
url=require('url');
querystring=require('querystring');//{ id: '10', name: 'user123' }这种叫做querystring参数字符串

cs=function(req,res){//cs创建web服务器;req客户端请求；res客户端响应
	uri=req.url;
	if(uri!=='/favicon.ico'){
		str=url.parse(uri).query;//把他解析成json对象
		//console.log(req.url);//在服务端打印一下,请求的时候，下方会打印出req的全部内容
		json=querystring.parse(str);//querystring得到json
		console.log(json);
		res.write('this is a web server!');
		res.end();//有web服务器，就要有停止对客户端的响应
	}
	
}


http.createServer(cs).listen(8000);

console.log('http server is ok!');//让服务器正常启动