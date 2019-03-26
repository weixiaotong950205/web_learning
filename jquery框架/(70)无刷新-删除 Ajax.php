<?php>
//查询数据库
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>index</title>
	<style>
		*{
			font-family: 微软雅黑；
		}
	</style>
	<script src="jquery.min.js"></script>
</head>
<body>
	echo "<tr></tr>"
	
</body>
<script>//上面是服务器的php代码
$('.del').click(function(){
	id=$(this).attr('id');
	obj=$(this);//此时this指的就是那个a连接
	$.get('.del.php',{id:id},function(r){  //js与ajax两种通讯方式：post、get
		if(r=='1'){  //一旦接收到1，就隐藏那一行
			obj.parent().parent().hide(1000);//此处不能用this,这里用this指的会是jquery对象本身；
		}
	});
});
</script>
</html>