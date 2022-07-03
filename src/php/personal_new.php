<?php

    include('Connection_self.php');
    //---------------------------------------------------

    session_start();
    // $acc = $_SESSION['UserID']
    $acc = 'admin@123.com';
    
    $name = $_GET['name'];
    $nickname = $_GET['nickname'];
    $phone = $_GET['phone'];
    $hobby = $_GET['hobby'];
    $intro = $_GET['intro'];

    //建立SQL語法
    $sql = "update MEMBER 
	set NAME = :name,NICKNAME = :nickname,PHONE = :phone,HOBBY =:hobby,INTRODUCTION=:intro 
    where EMAIL = :acc ";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement ->bindValue(':name',$name);
    $statement ->bindValue(':nickname',$nickname);
    $statement ->bindValue(':phone',$phone);
    $statement ->bindValue(':hobby',$hobby);
    $statement ->bindValue(':intro',$intro);
    $statement ->bindValue(':acc',$acc);
    $statement ->execute();

?>