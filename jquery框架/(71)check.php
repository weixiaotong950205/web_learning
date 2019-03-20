<?php

$pdo=new PDO('mysql:host=localhost;dbname=myweb','root','');
$pdo->exec('set names utf8');

$username=$_GET['username'];
$password=$_GET['password'];

$sql="select * from user where username='{$username}' and password={'$password'}"
echo $sql;

?>