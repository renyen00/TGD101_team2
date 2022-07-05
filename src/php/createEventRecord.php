<?php

    include("Connection_server.php");
    $postType = json_decode(file_get_contents("php://input"), true);
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

    }else if($postType['postType'] == 'cancelEvent'){

        $sqlcheckcancel = "SELECT STATUS FROM ACTIVITY 
        WHERE ID = :ACTIVITY_ID;";

        $statement = $pdo->prepare($sqlcheckcancel);
        $statement->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
        $statement->execute();
        $status = $statement->fetch();

        // 更新狀態
        $sqlcancel = "UPDATE ACTIVITY
        set 
            STATUS = 1
        WHERE
            ID = :ACTIVITY_ID;";

        // 判斷狀態
        if($status[0] == 1){   // 已取消
            $data = false;
            echo json_encode($data);

        }else{                 // 成功取消
            $statement2 = $pdo->prepare($sqlcancel);
            $statement2->bindParam(":ACTIVITY_ID", $postType['ACTIVITY_ID']);
            $statement2->execute();
            $data = true;
            echo json_encode($data);
        }
    }
?>