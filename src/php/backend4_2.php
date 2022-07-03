<?php

    include('Connection_self.php');
    //---------------------------------------------------


    //建立SQL語法
    $sql = "SELECT a.ID,a.ORDERTIME,a.PAYMENT,b.METHOD,c.STATUS,d.EMAIL,e.NAME,e.CELLPHONE,a.TOTAL
    FROM `ORDER` a
       join DELIVERY b on a.DELIVERY_ID =b.ID
       join ORDER_STATUS c on a.STATUS=c.ID
       join MEMBER d on a.MEMBER_ID = d.ID
       join RECEIVER e on a.RECEIVER_ID = e.ID
       where a.STATUS in (4,5)
       order by 1 desc";

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