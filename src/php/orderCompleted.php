<?php
    include("Connection_server.php");
    //  ==============================================
    
    //建立SQL語法
    $sql = "SELECT DATE(ord.ORDERTIME), ord.ID, ordSt.STATUS, ord.PAYMENT, ord.TOTAL
                FROM 
                `ORDER` ord
                        JOIN ORDER_STATUS ordSt
                                on ord.STATUS = ordSt.ID
                        join DELIVERY d
                                 on ord.DELIVERY_ID = d.ID";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    // print_r($data);

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