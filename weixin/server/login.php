<?php
/**
// * Created by PhpStorm.
// * User: Administrator
// * Date: 2016/10/4
// * Time: 11:33
// */
//echo '<pre>';
//print_r($_POST);
//echo '</pre>';
////创建sqli对象
//$sqli = new mysqli("localhost","root","","sz_72");
//$sqli->set_charset("utf8");
////$query ="select * from users where loginname="
	$loginname=$_REQUEST["txtLoginName"];
	$loginpwd=$_REQUEST["txtLoginPwd"];

	$link = mysqli_connect("localhost","root","","shooter");
	$query_str = "select * from users where loginname='$loginname' and loginpwd='$loginpwd'";
	$result = mysqli_query($link,$query_str);
	if($result){
        $result_count = mysqli_num_rows($result);
        if($result_count > 0){
            //登录成功
            if($row = mysqli_fetch_row($result)){
                $uid=$row[0];
                $nickname=$row[3];
                $json_array = array("uid"=>$uid,"nickname"=>$nickname);
                echo json_encode($json_array);
            }
        }else{
            echo "ERROR";
        }
    }else{
        echo "SERVER_ERROR";
    }
?>