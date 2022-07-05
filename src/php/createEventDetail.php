<?php

include("Connection_server.php");
$postType = json_decode(file_get_contents("php://input"), true);

//---------------------------------------------------

//建立SQL語法
if($postType['postType'] == 'sendMessage'){
    session_start();
    if(isset($_SESSION['UserUID'])){
        $sql = "INSERT INTO MESSAGE
        (ACTIVITY_ID, POSTTIME, MEMBER_ID, CONTENT)
        VALUES(:ACTIVITY_ID, NOW(), :USERID, :CONTENT);";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(":CONTENT", $postType['CONTENT']);
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->bindParam(":USERID", $_SESSION['UserUID']);
        $statement->execute();
        
        $data = true;
        echo json_encode($data);
    }else{
        $data = false;
        echo json_encode($data);
    }
    

}else if($postType['postType'] == 'initMessage'){
    $sql = "SELECT mb.ID, ms.CONTENT, mb.AVATAR, ms.ID MSID
            FROM `MESSAGE` ms
                join MEMBER mb
                    on ms.MEMBER_ID = mb.ID
            WHERE ms.ACTIVITY_ID = :ACTIVITY_ID
            order by ms.POSTTIME desc;";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
            $statement->execute();
            $data = $statement->fetchAll();
            echo json_encode($data);


}else if($postType['postType'] == 'initEventinfo'){
    $sql = "SELECT p.*, T.TYPENAME FROM PLACE p join PLACETYPE T on p.TYPE_ID = T.ID WHERE p.ID = 3;";
    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();
    echo json_encode($data);

}else if($postType['postType'] == 'insertApplyData'){
    session_start();
    if(isset($_SESSION['UserUID'])){
        $sqlcheckapply = "SELECT COUNT(*) FROM JOINLIST 
        WHERE ACTIVITY_ID = :ACTIVITY_ID AND MEMBER_ID = :USERID;";

        $sqlapply = "INSERT INTO JOINLIST
        (ACTIVITY_ID, MEMBER_ID, JOINTIME)
        VALUES(:ACTIVITY_ID, :USERID, NOW());";

        $sqlcheckstatus = "UPDATE ACTIVITY
        set 
            STATUS = 3
        WHERE
            ID = :ACTIVITY_ID AND STATUS = 2 
            AND (SELECT COUNT(*) FROM JOINLIST 
                WHERE ACTIVITY_ID = :ACTIVITY_ID) >= 3;";

        $sqlcheckmax = "SELECT IF((SELECT max FROM ACTIVITY WHERE ID = :ACTIVITY_ID) > (SELECT count(*) from JOINLIST WHERE ACTIVITY_ID = :ACTIVITY_ID), 1, 0);";

        $statement = $pdo->prepare($sqlcheckapply);
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->bindParam(":USERID", $_SESSION['UserUID']);
        $statement->execute();
        $count = $statement->fetch();

        $statement4 = $pdo->prepare($sqlcheckmax);
        $statement4->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement4->execute();
        $checklimit = $statement4->fetch();

        if($count[0] == 0){ // 報名額滿
            if($checklimit[0] == 0){
                $data = "applymax";
                echo json_encode($data);
            }else{  // 報名成功 > 更新狀態
                
                $statement2 = $pdo->prepare($sqlapply);
                $statement2->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
                $statement2->bindParam(":USERID", $_SESSION['UserUID']);
                $statement2->execute();

                $statement3 = $pdo->prepare($sqlcheckstatus);
                $statement3->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
                $statement3->execute();
                $data = true;
                echo json_encode($data);
            }

        }else{  // 已報過
            $data = "applied";
            echo json_encode($data);
        }
        
    }else{  // 非會員
        $data = false;
        echo json_encode($data);
    }
}else if($postType['postType'] == 'sendReport'){
    session_start();
    if(isset($_SESSION['UserUID'])){
        $sql = "INSERT INTO REPORT
        (MESSAGE_ID, MEMBER_ID, `TIME`, REASON, STATE)
        VALUES(:MESSAGE_ID, :USERID, NOW(), :REPORTREASON, '未審核');";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(":REPORTREASON", $postType['REPORTREASON']);
        $statement->bindParam(":MESSAGE_ID", $postType['MESSAGE_ID']);
        $statement->bindParam(":USERID", $_SESSION['UserUID']);
        $statement->execute();
        
        $data = true;
        echo json_encode($data);
    }else{
        $data = false;
        echo json_encode($data);
    }
    

}
?>