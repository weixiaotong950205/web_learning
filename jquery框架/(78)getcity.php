<?php     <!-- 省、市、区的数据用Ajax从数据库里面来 -->
$pdo=new PDO('mysql:host=localhost;dbname=myweb','root','');
$pdo=exec('set names utf8');

$pid=$_GET['pid'];
$sql="select * form s_city where ProvinceID={$pid}";
$smt=$pdo->query($sql);
$rows=$smt->fetchALL(PDO::FETCH_ASSOC);

echo "<option>--选择市--</option>"；
foreach($row as $row){  //遍历每个省，联级到每个市
	echo "<option value='{$row['CityID']}'>{$row['CityName']}</option>";//得到这个城市的ID
 ?>}
