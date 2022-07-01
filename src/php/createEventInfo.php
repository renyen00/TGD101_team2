<?php

    include("Connection_server.php");
    $activityId = json_decode(file_get_contents("php://input"), true);
    // echo $activityId['activityId'];
    //---------------------------------------------------

    $sql = "SELECT a.*, t.TYPENAME, p.NAME, p.COST, p.LIMIT
            FROM ACTIVITY a 
                join PLACE p 
                    on a.PLACE_ID = p.ID 
                    join PLACETYPE t 
                        on p.TYPE_ID = t.ID 
            WHERE a.ID = :activityId;";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(":activityId", $activityId['activityId']);
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);

?>