<?php
    include("Connection_server.php");

    $data = json_decode(file_get_contents("php://input"), true);

    //  =============================================
    // Reveiver Information
    $receiverId = $data['receiverId'];
    $receiverNm = $data['receiverNm'];
    $receiverGd = $data['receiverGd'];
    $receiverEmail = $data['receiverEm'];
    $receiverAdd = $data['receiverAdd'];
    $receiverCell = $data['receiverCell'];
    $receiverPhone = $data['receiverPhone'];

    //建立SQL
    $sql = "INSERT INTO RECEIVER(ID, NAME, GENDER, EMAIL, ADDRESS, CELLPHONE, HOMEPHONE) VALUES (?, ?, ?, ?, ?, ?,?)";


    //執行
    //  $pdo->exec($sql);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $receiverId);
    $statement->bindValue(2, $receiverNm);
    $statement->bindValue(3, $receiverGd);
    $statement->bindValue(4, $receiverEmail);
    $statement->bindValue(5, $receiverAdd);
    $statement->bindValue(6, $receiverCell);
    $statement->bindValue(7, $receiverPhone);
    $statement->execute();
    sleep(0.5);
    // header("Location: ../orderCompleted.html");

//  =============================================
    // Create order information
    $orderTime = $data['orderTime'];
    $buyerId = $data['buyerId'];
    $receiverId = $data['receiverId'];
    $orderPrice = $data['orderPrice'];

    //建立SQL
    $sql = "INSERT INTO ORDER(ORDERTIME, MEMBER_ID, RECEIVER_ID, TOTAL) VALUES (?, ?, ?, ?)";

    // //執行
    $pdo->exec($sql);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $orderTime);
    $statement->bindValue(2, $buyerId);
    $statement->bindValue(3, $receiverId);
    $statement->bindValue(4, $orderPrice);
    $statement->execute();

    include("pay.php");

?>