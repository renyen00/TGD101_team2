<?php

    include("Connection_server.php");
    $activityId = json_decode(file_get_contents("php://input"), true);
    // echo $activityId['activityId'];
    //---------------------------------------------------

    $sql = "SELECT a.*, t.TYPENAME, p.NAME, p.COST, p.LIMIT, m.AVATAR
            FROM ACTIVITY a 
                join PLACE p 
                    on a.PLACE_ID = p.ID 
                    join PLACETYPE t 
                        on p.TYPE_ID = t.ID
                        join MEMBER m
                            on a.Main_ID = m.ID 
            WHERE a.ID = :ACTIVITY_ID;";
    $statement = $pdo->prepare($sql);
    $statement->bindParam(":ACTIVITY_ID", $activityId['ACTIVITY_ID']);
    $statement->execute();
    $data = $statement->fetchAll();

    echo json_encode($data);

?>