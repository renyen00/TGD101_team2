<?php
    include("Connection_server.php");
    print_r($_POST);
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
    $_SESSION['UserE'] = $acc;
    // $_SESSION['memcol'] = $data;
    foreach($data as $index => $row){
        $_SESSION['UserN'] = $row["NAME"];  
        $_SESSION['UserNN'] = $row["NICKNAME"];    //欄位名稱
        $_SESSION['UserNB'] = $row["AVATAR"];    //欄位名稱	
        $_SESSION['UserUID'] = $row["ID"];
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""]; 
        // $_SESSION[''] = $row[""];    
    }
    header("location:../index.html");
    }else{
        print_r($_POST);
    };
    //將二維陣列取出顯示其值

?>