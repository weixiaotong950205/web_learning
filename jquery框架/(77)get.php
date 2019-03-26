<?php
$pdo=new PDO('mysql:host=localhost;dbname=myweb','root','');
$pdo->exec('set names utf8');

$username=$_GET['username'];
$sql="select * from user where username='{$username}'";

$smt=$pdo->query($sql);
$row=$smt->fetch();

if($row){
	echo 1;
}

?>