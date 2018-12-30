<?php
//把数据库表中的数据查询出来，并且显示到页面上
//连接数据库
$pdo=new PDO('mysql:host=localhost;dbname=myweb','root','');
$pdo->exec('set names utf8');

$sql='select * from user';
$smt=$pdo->query($sql);
$rows=$smt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{
			font-family: 微软雅黑;
		}
		img{

		}
	</style>
</head>
<body>
	<h2>用户管理：</h2>
	<table width="1000px" border="1px" cellspacing="0">   <!-- cellspacing表格合并 -->
		<tr>
			<th>编码</th>
			<th>用户名</th>
			<th>密码</th>
			<th>删除</th>
		</tr>
		<?php
			foreach($rows as $rows){
				echo "<tr id='tr{$row['id']}'>";
				echo "<td>{$row['id']}</td>";
				echo "<td>{$row['username']}</td>";
				echo "<td>{$row['password']}</td>";
				echo "<td><a href='delete.php?id={$row['id']}'>删除</a></td>";
				echo "</tr>";
			}
		?>
	</table>
</body>
<script>
del=document.getElementsByClassName('del');

for(i=0;i<dels.length;i++){
	dels[i].onclick=function(){
		id=this.id;
		//向del.php发起通讯
        xhr=new new XMLHttpRequest();

		//获取php文件返回给js的状态值
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				s=xhr.responseText;

				if(s=='1'){
					trobj=document.getElementById('tr'+id);
					trobj.style.display = 'none';
				}
			}
		}

		//准备参数
		xhr.open('get', 'del.php?id='+id,true);

		//发起请求
		xhr.send();
	};
}
</script>
</html>