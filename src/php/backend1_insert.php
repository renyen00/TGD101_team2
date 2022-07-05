<?php

    include('Connection_self.php');
    //---------------------------------------------------
    //建立SQL語法
    
    if($_GET['quest'] == 1){
        $title=$_GET['title'];
        $content=$_GET['content'];
        $sql = "INSERT INTO NOTICE (TITLE, CONTENT,POSTTIME) VALUES (:title, :content,now());
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':title',$title);
        $statement ->bindValue(':content',$content);
        $statement ->execute();

    }else if($_GET['quest'] == 2){
        $a=$_GET['a'];
        $b=$_GET['b'];
        $n=$_GET['i'];

        $sql = "UPDATE BOT set KEYWORD = :a,ANSWER = :b where ID = :n 
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':a',$a);
        $statement ->bindValue(':b',$b);
        $statement ->bindValue(':n',$n);
        $statement ->execute();
    }else if($_GET['quest'] == 3){
        $a=$_GET['a'];
        $b=$_GET['b'];

        $sql = "INSERT INTO BOT(KEYWORD,ANSWER) VALUES (:a,:b) 
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':a',$a);
        $statement ->bindValue(':b',$b);
        $statement ->execute();
    }else if($_GET['quest'] == 4){
        $n=$_GET['n'];

        $sql = "DELETE FROM BOT WHERE ID = :n;
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':n',$n);
        $statement ->execute();
    }else if($_GET['quest'] == 5){
        $n=$_GET['n'];

        $sql = "DELETE FROM MESSAGE WHERE ID = :n;
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':n',$n);
        $statement ->execute();
    }else if($_GET['quest'] == 6){
        $content=$_GET['content'];
        $n=$_GET['id'];

        $sql = "UPDATE SERVICE set REPLY_STATUS = 'yes',REPLY = :content where ID = :n
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':content',$content);
        $statement ->bindValue(':n',$n);
        $statement ->execute();
    }else if($_GET['quest'] == 7){
        $s=$_GET['s'];
        $id=$_GET['id'];

        $sql = "UPDATE REPORT set STATE = :s where ID = :id
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':s',$s);
        $statement ->bindValue(':id',$id);
        $statement ->execute();
    }





?>