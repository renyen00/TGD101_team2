<?php

    include("Connection_server.php");
    $postType = json_decode(file_get_contents("php://input"), true);
    // echo $activityId['activityId'];
    //---------------------------------------------------
    if($postType['postType'] == 'initEventinfo'){

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
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->execute();
        $data = $statement->fetchAll();
        echo json_encode($data);

    }else if($postType['postType'] == 'initApplicants'){
        $sql = "SELECT m.NICKNAME, m.AVATAR  
        FROM JOINLIST j 
            JOIN `MEMBER` m
                on j.MEMBER_ID = m.ID
        WHERE j.ACTIVITY_ID = :ACTIVITY_ID;";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->execute();
        $data = $statement->fetchAll();
        
        echo json_encode($data);
    }else if($postType['postType'] == 'initReportReason'){
        $sql = "SELECT * FROM REPORT_REASON;";

        $statement = $pdo->query($sql);
        $data = $statement->fetchAll();
        echo json_encode($data);
    }
?>