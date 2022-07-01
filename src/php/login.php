<?php
    include("Connection_server.php");
    $acc = $_POST["EMAIL"];
    $pwd = $_POST["PASSWORD"];

    $sql = "SELECT * FROM MEMBER WHERE EMAIL = ? and PASSWORD = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$acc);
    $statement->bindValue(2,$pwd);
    $statement->execute();


    $data = $statement->fetchAll();

    if(count($data) > 0){
    // echo '登入成功';
        
    session_start();
    $_SESSION['UserID'] = $acc;
    foreach($data as $index => $row){
        $_SESSION['UserN'] = $row["NAME"];//欄位名稱
        //    echo $row["NAME"];   
        $_SESSION['UserNN'] = $row["NICKNAME"];    //欄位名稱
        $_SESSION['UserNB'] = $row["AVATAR"];    //欄位名稱	
        // $_SESSION[''] = $row[""];
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""];    
    }
    header("location:../index.html");
    }else{
    echo '帳號或密碼錯誤';
    };
    //將二維陣列取出顯示其值

?>