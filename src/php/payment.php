<?php
    include("Connection_server.php");
    //  =============================================
    // REveiver Information
    $receiverNm = htmlspecialchars($_POST["receivername"]);
    $receiverGd = htmlspecialchars($_POST["receivergender"]);
    $receiverEmail = htmlspecialchars($_POST["receiveremail"]);
    $receiverAdd = htmlspecialchars($_POST["zipcode"].$_POST["county"].$_POST["district"]);
    //  $buyerCounty = htmlspecialchars($_POST["county"]);
    //  $buyerdist = htmlspecialchars($_POST["district"]);
    //  $buyerZip = htmlspecialchars($_POST["zipcode"]);
    $receiverCell = htmlspecialchars($_POST["receivercellphoneNum"]);
    $receiverPhone = htmlspecialchars($_POST["receiverphoneNum"]);

    // echo $receiverNm;



    //建立SQL
    $sql = "INSERT INTO TGD101team2.RECEIVER(NAME, GENDER, EMAIL, ADDRESS, CELLPHONE, HOMEPHONE) VALUES (?, ?, ?, ?, ?, ?)";


    //執行
    //  $pdo->exec($sql);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $receiverNm);
    $statement->bindValue(2, $receiverGd);
    $statement->bindValue(3, $receiverEmail);
    $statement->bindValue(4, $receiverAdd);
    $statement->bindValue(5, $receiverCell);
    $statement->bindValue(6, $receiverPhone);
    $statement->execute();

    // header("Location: ../orderCompleted.html");

// Buyer Information
// $buyerNm = htmlspecialchars($_POST["buyername"]);
// $buyerGd = htmlspecialchars($_POST["gender"]);
// $buyerEmail = htmlspecialchars($_POST["email"]);
// $buyerCounty = htmlspecialchars($_POST["county"]);
// $buyerdist = htmlspecialchars($_POST["district"]);
// $buyerZip = htmlspecialchars($_POST["zipcode"]);
// $buyerCell = htmlspecialchars($_POST["cellphoneNum"]);
// $buyerPhone = htmlspecialchars($_POST["phoneNum"]);

?>