<?php

    include('Connection_self.php');
    //---------------------------------------------------
    //建立SQL語法
    $postType = json_decode(file_get_contents("php://input"), true);
    if($_GET['quest'] == 1){
        $s=$_GET['s'];
        $id=$_GET['id'];
        $sql = "UPDATE PRODUCT SET STATUS = :s where ID =:id;
        ";
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':s',$s);
        $statement ->bindValue(':id',$id);
        $statement ->execute();

    }else if($_GET['quest'] == 2){
        $pic ='./images/store/'.$_GET['pic'];
        $name =$_GET['name'];
        $price =$_GET['price'];
        $text =$_GET['text'];
        $status =$_GET['status'];
        $type =$_GET['type'];
        $material =$_GET['material'];
        $pic2 =$_GET['pic2'];
        $pic3 =$_GET['pic3'];
        $b64img =$postType['PICTURE'];


        $sql = "INSERT INTO PRODUCT (PIC,NAME,PRICE,TEXT,STATUS,TYPE,MATERIAL,PIC2,PIC3) VALUES (:pic,:name,:price,:text,:status,:type,:material,:pic2,:pic3);
        ";

        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $b64img);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $path = $ServerRoot."/tgd101/g2/dist/images/store/";    
            if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
                mkdir($path,0777,true);
            }
        $imageSrc = $path.$_GET['pic'];
        file_put_contents($imageSrc, $data);
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':pic',$pic);
        $statement ->bindValue(':name',$name);
        $statement ->bindValue(':price',$price);
        $statement ->bindValue(':text',$text);
        $statement ->bindValue(':status',$status);
        $statement ->bindValue(':type',$type);
        $statement ->bindValue(':material',$material);
        $statement ->bindValue(':pic2',$pic2);
        $statement ->bindValue(':pic3',$pic3);
        $statement ->execute();
    }else if($_GET['quest'] == 3){
        $pic ='./images/store/'.$_GET['pic'];
        $name =$_GET['name'];
        $price =$_GET['price'];
        $text =$_GET['text'];
        $status =$_GET['status'];
        $type =$_GET['type'];
        $material =$_GET['material'];
        $pic2 =$_GET['pic2'];
        $pic3 =$_GET['pic3'];
        $b64img =$postType['PICTURE'];

        $id=$_GET['id'];
        $sql = "UPDATE PRODUCT SET PIC = :pic, NAME = :name, PRICE = :price,TEXT = :text,STATUS= :status,TYPE = :type,MATERIAL= :material,PIC2 = :pic2,PIC3= :pic3
        WHERE ID = :id;
        ";
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $b64img);
        $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
        $path = $ServerRoot."/tgd101/g2/dist/images/store/";    
            if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
                mkdir($path,0777,true);
            }
        $imageSrc = $path.$_GET['pic'];
        echo $data;
         file_put_contents($imageSrc, $data);
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement ->bindValue(':pic',$pic);
        $statement ->bindValue(':name',$name);
        $statement ->bindValue(':price',$price);
        $statement ->bindValue(':text',$text);
        $statement ->bindValue(':status',$status);
        $statement ->bindValue(':type',$type);
        $statement ->bindValue(':material',$material);
        $statement ->bindValue(':pic2',$pic2);
        $statement ->bindValue(':pic3',$pic3);
        $statement ->bindValue(':id',$id);
        $statement ->execute();
    }

?>