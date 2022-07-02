<?php

    include('Connection_self.php');
    //---------------------------------------------------


    //建立SQL語法
    $sql = "SELECT a.ID,a.MESSAGE_ID M_ID,c.EMAIL,a.TIME,d.REASON,a.STATE,b.EMAIL USER,b.CONTENT FROM REPORT a
    join (select a.ID,a.CONTENT,b.EMAIL  from message a join member b on a.MEMBER_ID = b.ID ) b on a.MESSAGE_ID = b.ID
   join MEMBER c on a.MEMBER_ID = c.ID
   join REPORT_REASON d on a.REASON = d.ID
   where STATE = '未審核'";

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