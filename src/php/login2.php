<?php
    session_start();
    include("Connection_server.php");
    $acc = $_GET["EMAIL"];
    $pwd = $_GET["PASSWORD"];

    $sql = "SELECT * FROM MEMBER WHERE EMAIL = ? and PASSWORD = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$acc);
    $statement->bindValue(2,$pwd);
    $statement->execute();



    $data = $statement->fetchAll();

    if(count($data) > 0){
        echo json_encode("有");
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
    }else{
        echo json_encode("沒有");
    }


?>