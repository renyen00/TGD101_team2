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
    $sql = "SELECT mb.ID, ms.CONTENT, mb.AVATAR
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

        $sql = "INSERT INTO JOINLIST
        (ACTIVITY_ID, MEMBER_ID)
        VALUES(:ACTIVITY_ID, :USERID);";

        $statement = $pdo->prepare($sqlcheckapply);
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->bindParam(":USERID", $_SESSION['UserUID']);
        $statement->execute();
        $count = $statement->fetch();
        if($count[0] == 0){
            $statement2 = $pdo->prepare($sql);
            $statement2->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
            $statement2->bindParam(":USERID", $_SESSION['UserUID']);
            $statement2->execute();
            $data = true;
            echo json_encode($data);
        }else{
            $data = "applied";
            echo json_encode($data);
        }
        
    }else{
        $data = false;
        echo json_encode($data);
    }
}
?>