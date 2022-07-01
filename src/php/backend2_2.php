<?php

    include('Connection_self.php');
    //---------------------------------------------------


    //建立SQL語法
    $sql = "select a.ID,a.M_ID,a.EMAIL,a.TIME,b.REASON,a.STATE,a.USER,a.CONTENT
    from (select a.ID,a.M_ID,b.EMAIL,a.TIME,a.REASON,a.STATE,a.EMAIL USER,a.CONTENT
    from (SELECT a.ID,b.ID M_ID,a.MEMBER_ID,a.TIME,a.REASON,a.STATE,b.EMAIL,b.CONTENT FROM REPORT a
        join (SELECT a.ID,b.EMAIL,a.CONTENT from MESSAGE a
        join MEMBER b on a.MEMBER_ID = b.ID ) b on a.MEMBER_ID = b.ID) a
        join MEMBER b on a.MEMBER_ID = b.ID) a
        join REPORT_REASON b on a.REASON = b.ID
        where STATE != '未審核'";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
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