<?php

    include("Connection_server.php");
    $postType = json_decode(file_get_contents("php://input"), true);
    //---------------------------------------------------

    //建立SQL語法
    if($postType['postType'] == 'createEvent'){
        $sql = "SELECT a.*, p.NAME
        FROM ACTIVITY a
         JOIN PLACE p
             on a.PLACE_ID = p.ID
        WHERE a.STATUS = 2 or a.STATUS = 3
        order by a.ID desc";
        $statement = $pdo->query($sql);
        $data = $statement->fetchALL();
        echo json_encode($data);

    }else if($postType['postType'] == 'officialEvent'){
        $sql = "SELECT o.*, p.NAME
        FROM OFFICIAL_ACTIVITY o
         JOIN PLACE p
             on o.PLACE_ID = p.ID
        -- WHERE o.STATUS = 2 or o.STATUS = 3
        order by o.ID desc";
        $statement = $pdo->query($sql);
        $data = $statement->fetchALL();
        echo json_encode($data);
    }
    

?>