<?php

    include("Connection_server.php");
    $postType = json_decode(file_get_contents("php://input"), true);
    
    //---------------------------------------------------

    //建立SQL語法
    if($postType['postType'] == 'placeType'){
        $sql = "SELECT * FROM PLACETYPE;";
        $statement = $pdo->query($sql);
        $data = $statement->fetchAll();
        echo json_encode($data);

    }else if($postType['postType'] == 'initData'){
        $sql = "SELECT p.*, T.TYPENAME FROM PLACE p join PLACETYPE T on p.TYPE_ID = T.ID;";
        $statement = $pdo->query($sql);
        $data = $statement->fetchAll();
        echo json_encode($data);

    }else if($postType['postType'] == 'insertData'){
        $avatarBase64Str = $postType['PICTURE'];
        //server根目錄
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $avatarBase64Str);
	    $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
    
        //圖片名稱
        $imageName = 'user'.rand(1,100).'.jpg';

        //server路徑+自己資料夾的名稱
        $path = $ServerRoot."/bettyGroup/src/images/userUpload/";     
        if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
            mkdir($path,0777,true);
        }
        //拼成完整路徑
        $imageSrc = $path.$imageName;  
        // echo json_encode('./images/userUpload/'.$imageName);
        $imageSrcforSQL = './images/userUpload/'.$imageName;

        //寫入檔案，並回傳結果
        $r = file_put_contents($imageSrc, $data);
        
        // if (!$r) {
        //     // return json(['data'=>null,"code"=>1,"msg"=>"圖片生成失敗"]);
        //     echo "上傳失敗";
        // }else{
        //     // return json(['data'=>1,"code"=>0,"msg"=>"圖片生成成功"]);
        //     echo "上傳成功";
        // }
    
        $sql = "INSERT INTO ACTIVITY
        (MAIN_ID, TITLE, EVENTDATE, STARTTIME, ENDTIME, PLACE_ID, POSTTIME, STOPTIME, MAX, PICTURE, PICTURE_POSITION, CONTENT, STATUS, MINAGE, MAXAGE)
        VALUES('1', :TITLE, :EVENTDATE, :STARTTIME, :ENDTIME, :PLACE_ID, NOW(), :STOPDATE, :MAX, :PICTURE, :PICTURE_POSITION, :CONTENT, '2', :MINAGE, :MAXAGE);";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(":TITLE", $postType['TITLE']);
        $statement->bindParam(":EVENTDATE", $postType['EVENTDATE']);
        $statement->bindParam(":STARTTIME", $postType['STARTTIME']);
        $statement->bindParam(":ENDTIME", $postType['ENDTIME']);
        $statement->bindParam(":PLACE_ID", $postType['PLACE_ID']);
        $statement->bindParam(":STOPDATE", $postType['STOPDATE']);
        $statement->bindParam(":MAX", $postType['MAX']);
        $statement->bindParam(":PICTURE", $imageSrcforSQL);
        $statement->bindParam(":PICTURE_POSITION", $postType['PICTURE_POSITION']);
        $statement->bindParam(":CONTENT", $postType['CONTENT']);
        $statement->bindParam(":MINAGE", $postType['MINAGE']);
        $statement->bindParam(":MAXAGE", $postType['MAXAGE']);
        $statement->execute();


    }
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();

    // print_r($data);

    // $process_data = [];
    //將二維陣列取出顯示其值
//     foreach($data as $index => $row){
//             $temp = [];

//             for($i=0; $i<(count($row)/2); $i++){
                    
//                     array_push($temp, $row[$i]);
//             }

//             array_push($process_data, $temp);
//     }

    // print_r($process_data[0]);
    // echo json_encode($data);




?>