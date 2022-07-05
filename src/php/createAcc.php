<?php

    include("Connection_server.php");
    $acc_pre = $_POST['EMAIL'];
    $sql = "select * from MEMBER where EMAIL = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(1,$acc_pre);
    $stmt->execute();

    $data = $stmt->fetchAll();

    if(count($data) > 0){
        echo json_encode('safe');
    }else{
        $password=[];
        $str='';

        for($i = 0;$i<10;$i++){
            array_push($password,$i);
        }
        for($i = 97;$i<123;$i++){
            array_push($password,chr($i));
        }
        shuffle($password);

        for($i = 0;$i<10;$i++){
            $str=$str.$password[$i];
        }


        $name = htmlspecialchars($_POST["NAME"]);
        $nickname = htmlspecialchars($_POST["NICKNAME"]);
        $email = htmlspecialchars($_POST["EMAIL"]);
        $pwd = htmlspecialchars($_POST["PASSWORD"]);
        $tel = htmlspecialchars($_POST["PHONE"]);
        $date = htmlspecialchars($_POST["BIRTH"]);

        $sql = '
        insert into MEMBER(NAME,NICKNAME,EMAIL,PASSWORD,PHONE,BIRTH)
        values(:name, :nickname, :email,:password,:tel,:date)';

        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":name", $name);
        $stmt->bindValue(":nickname", $nickname);
        $stmt->bindValue(":email", $email);
        $stmt->bindValue(":password", $pwd);
        $stmt->bindValue(":tel", $tel);
        $stmt->bindValue(":date", $date);
        $stmt->execute();
        $resp['sucessfully'] = $stmt->rowCount() > 0;
        echo json_encode($resp);
        exit();
    }

?>