<?php

    include('Connection_self.php');
    //---------------------------------------------------

    session_start();
    $acc = $_SESSION['UserE'];
    
    // $acc = 'admin@123.com';
    //建立SQL語法
    if($_GET['quest'] == 1){
        $sql = "SELECT a.PICTURE,a.TITLE,b.NAME,a.EVENTDATE,a.STARTTIME,a.STOPTIME,e.Q,a.MAX,d.STATUS,c.EMAIL,a.ID FROM ACTIVITY a
        join PLACE b on a.PLACE_ID =b.ID
        join (select a.ACTIVITY_ID,b.EMAIL from JOINLIST a join MEMBER b on a.MEMBER_ID = b.ID) c on a.ID = c.ACTIVITY_ID
        join ACTIVITY_STATUS d on a.STATUS = d.ID
        join (SELECT  ACTIVITY_ID ACT,COUNT(MEMBER_ID) Q FROM JOINLIST group by ACTIVITY_ID) e on a.ID = e.ACT
        where c.EMAIL = :acc
            and a.STATUS in (2)
        order by a.ID ";
    }else if($_GET['quest'] == 2){
        $sql = "SELECT a.PICTURE,a.TITLE,b.NAME,a.EVENTDATE,a.STARTTIME,a.STOPTIME,e.Q,a.MAX,d.STATUS,c.EMAIL,a.ID FROM ACTIVITY a
        join PLACE b on a.PLACE_ID =b.ID
        join (select a.ACTIVITY_ID,b.EMAIL from JOINLIST a join MEMBER b on a.MEMBER_ID = b.ID) c on a.ID = c.ACTIVITY_ID
        join ACTIVITY_STATUS d on a.STATUS = d.ID
        join (SELECT  ACTIVITY_ID ACT,COUNT(MEMBER_ID) Q FROM JOINLIST group by ACTIVITY_ID) e on a.ID = e.ACT
        where c.EMAIL = :acc
            and a.STATUS in (1,3)
        order by a.ID desc";
    }else if($_GET['quest'] == 3){
        $sql = "SELECT a.PICTURE,a.TITLE,b.NAME,a.EVENTDATE,a.STARTTIME,a.STOPTIME,e.Q,a.MAX,d.STATUS,c.EMAIL,a.ID FROM ACTIVITY a
        join PLACE b on a.PLACE_ID =b.ID
        join MEMBER c on a.MAIN_ID = c.ID
        join ACTIVITY_STATUS d on a.STATUS = d.ID
        join (SELECT  ACTIVITY_ID ACT,COUNT(MEMBER_ID) Q FROM JOINLIST group by ACTIVITY_ID) e on a.ID = e.ACT
        where c.EMAIL = :acc
        order by a.ID";

    }else if($_GET['quest'] == 4){
        $sql = "SELECT a.PICTURE,a.TITLE,b.NAME,a.EVENTDATE,a.STARTTIME,a.ENDTIME,e.Q,a.MAX,d.STATUS,c.EMAIL,a.ID FROM OFFICIAL_ACTIVITY a
        join PLACE b on a.PLACE_ID =b.ID
        join (select a.OFFICIAL_ID,b.EMAIL from OFFICIAL_JOINLIST a join MEMBER b on a.MEMBER_ID = b.ID) c on a.ID = c.OFFICIAL_ID
        join ACTIVITY_STATUS d on a.STATUS = d.ID
        join (SELECT  OFFICIAL_ID ACT,COUNT(MEMBER_ID) Q FROM OFFICIAL_JOINLIST group by OFFICIAL_ID) e on a.ID = e.ACT
        where c.EMAIL = :acc
            and a.STATUS in (2)
        order by a.ID";
    }else if($_GET['quest'] == 5){
        $sql = "SELECT a.PICTURE,a.TITLE,b.NAME,a.EVENTDATE,a.STARTTIME,a.ENDTIME,e.Q,a.MAX,d.STATUS,c.EMAIL,a.ID FROM OFFICIAL_ACTIVITY a
        join PLACE b on a.PLACE_ID =b.ID
        join (select a.OFFICIAL_ID,b.EMAIL from OFFICIAL_JOINLIST a join MEMBER b on a.MEMBER_ID = b.ID) c on a.ID = c.OFFICIAL_ID
        join ACTIVITY_STATUS d on a.STATUS = d.ID
        join (SELECT  OFFICIAL_ID ACT,COUNT(MEMBER_ID) Q FROM OFFICIAL_JOINLIST group by OFFICIAL_ID) e on a.ID = e.ACT
        where c.EMAIL = :acc
            and a.STATUS in (1,3)
        order by a.ID desc";
    }

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement ->bindValue(':acc',$acc);
    $statement ->execute();
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

//     print_r($data);

    $process_data = [];
    //將二維陣列取出顯示其值
    foreach($data as $index => $row){
            $temp = [];

            for($i=0; $i<(count($row)/2); $i++){
                    
                    array_push($temp, $row[$i]);
            }

            array_push($process_data, $temp);
    }

    // print_r($process_data[0]);
    echo json_encode($process_data);

?>