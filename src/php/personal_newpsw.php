<?php

    include('Connection_self.php');
    //---------------------------------------------------

    session_start();
    // $acc = $_SESSION['UserID']
        $acc = 'admin@123.com';

    $pass = $_GET['password'];
    

    //建立SQL語法
    $sql = "update MEMBER 
	set PASSWORD = :pass 
    where EMAIL = :acc ";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement ->bindValue(':pass',$pass);
    $statement ->bindValue(':acc',$acc);
    $statement ->execute();

?>