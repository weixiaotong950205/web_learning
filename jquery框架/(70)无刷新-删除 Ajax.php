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
	sdvfdefvgbefrefre
	
</body>
<script>//上面是服务器的php代码
$('.del').click(function(){
	id=$(this).attr('id');
	obj=$(this);
	$.get('.del.php',{id:id},function(r){  //js与ajax两种通讯方式：post、get
		if(r=='1'){
			obj.parent().parent().hide(1000);
		}
	});
});
</script>
</html>