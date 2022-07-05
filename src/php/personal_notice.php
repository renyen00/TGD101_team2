<?php

    include('Connection_self.php');
    //---------------------------------------------------

    session_start();
    $acc = $_SESSION['UserE'];
    
    // $acc = 'admin@123.com';
    //建立SQL語法
    if($_GET['quest'] == 1){
        $sql = "SELECT a.TITLE,LEFT(b.JOINTIME,10) FROM ACTIVITY a
        join (SELECT a.ACTIVITY_ID,b.EMAIL,a.JOINTIME from JOINLIST a join MEMBER b on a.MEMBER_ID = b.ID) b on a.ID =b.ACTIVITY_ID
        where b.EMAIL = :acc 
        order by 2 desc";
    }else if($_GET['quest'] == 2){
        $sql = "SELECT a.TITLE,a.CONTENT,LEFT(a.POSTTIME,10) DATE FROM NOTICE a join MEMBER b on a.POSTTIME > b.CREATETIME where b.EMAIL = :acc order by a.POSTTIME desc;";
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