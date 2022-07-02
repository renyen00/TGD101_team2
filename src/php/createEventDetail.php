<?php

include("Connection_server.php");
$postType = json_decode(file_get_contents("php://input"), true);

//---------------------------------------------------

//建立SQL語法
if($postType['postType'] == 'sendMessage'){

    $sql = "INSERT INTO MESSAGE
    (ACTIVITY_ID, POSTTIME, MEMBER_ID, CONTENT)
    VALUES(:ACTIVITY_ID, NOW(), :MEMBER_ID, :CONTENT);";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(":CONTENT", $postType['CONTENT']);
    $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
    $statement->bindParam(":MEMBER_ID", $postType['MEMBER_ID']);
    $statement->execute();
    

}else if($postType['postType'] == 'initMessage'){
    $sql = "SELECT mb.ID, ms.CONTENT, mb.AVATAR
            FROM MESSAGE ms
                join MEMBER mb
                    on ms.MEMBER_ID = mb.ID
            WHERE ms.ACTIVITY_ID = 19
            order by ms.POSTTIME desc;";

    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();
    echo json_encode($data);


}else if($postType['postType'] == 'initEventinfo'){
    $sql = "SELECT p.*, T.TYPENAME FROM PLACE p join PLACETYPE T on p.TYPE_ID = T.ID WHERE p.ID = 3;";
    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();
    echo json_encode($data);
}


?>