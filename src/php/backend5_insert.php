<?php

    include('Connection_self.php');
    //---------------------------------------------------
    //建立SQL語法
    
    if($_GET['quest'] == 1){
        
        $id=$_GET['id'];
        $sql = "UPDATE OFFICIAL_ACTIVITY SET STATUS = 1 where ID =:id;
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':s',$s);
        $statement ->bindValue(':id',$id);
        $statement ->execute();

    }else if($_GET['quest'] == 2){
        

        $id=$_GET['id'];
        $sql = "UPDATE ACTIVITY SET STATUS = 1 where ID =:id;
        ";
        
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':id',$id);
        $statement ->execute();
    }else if($_GET['quest'] == 3){

        $title=$_GET['title'];
        $date=$_GET['date'];
        $place=$_GET['place'];
        $people=$_GET['people'];
        $cost=$_GET['cost'];
        $content=$_GET['content'];


        $sql = "INSERT INTO  OFFICIAL_ACTIVITY (PICTURE,TITLE ,EVENTDATE,PLACE_ID,POSTTIME,STARTTIME,ENDTIME,MAX,STATUS,COST,CONTENT) VALUES ('./images/officalEvent/4.jpg',:title,:date,:place,now(),'10AM',SUBDATE(EVENTDATE, 3),:people,'2',:cost,:content);
        ";

        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':title',$title);
        $statement ->bindValue(':date',$date);
        $statement ->bindValue(':place',$place);
        $statement ->bindValue(':people',$people);
        $statement ->bindValue(':cost',$cost);
        $statement ->bindValue(':content',$content);
        $statement ->execute();
    }else if($_GET['quest']==4){
        $id=$_GET['id'];
        $sql = "select OFFICIAL_ID,COUNT(MEMBER_ID) from OFFICIAL_JOINLIST  where OFFICIAL_ID =:id group by OFFICIAL_ID
        ";
        
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':id',$id);
        $statement ->execute();
    }

?>