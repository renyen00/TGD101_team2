<?php
    include("Connection_server.php");
    $acc = $_GET["EMAIL"];

    $sql = "SELECT * FROM MEMBER WHERE EMAIL = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$acc);
    $statement->execute();

    $data = $statement->fetchAll();

    if(count($data) > 0){
        echo json_encode("有");
    }else{
        echo json_encode("沒有");
    }


?>