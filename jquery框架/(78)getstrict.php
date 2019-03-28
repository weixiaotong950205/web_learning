<?php     <!-- 省、市、区的数据用Ajax从数据库里面来 -->
$pdo=new PDO('mysql:host=localhost;dbname=myweb','root','');
$pdo=exec('set names utf8');

$cid=$_GET['cid'];
$sql="select * form s_district where CityID={$cid}";
$smt=$pdo->query($sql);
$rows=$smt->fetchALL(PDO::FETCH_ASSOC);

echo "<option>--选择区--</option>"；
foreach($row as $row){  //遍历每个省，联级到每个市
	echo "<option value='{$row['DistrictID']}'>{$row['DistrictName']}</option>";//得到这个城市的ID
 ?>}
