<?php

    include("Connection_server.php");
    $postType = json_decode(file_get_contents("php://input"), true);
    session_start();
    $acc = $_SESSION['UserE'];
    //---------------------------------------------------   
        $avatarBase64Str = $postType['img'];
        //server根目錄
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        $img = str_replace(['data:image/png;base64,','data:image/jpeg;base64,'], '', $avatarBase64Str);
	    $img = str_replace(' ', '+', $img);
        $data = base64_decode($img);
    
        //圖片名稱
        $imageName = 'role'.rand(1,1000).'.png';

        //server路徑+自己資料夾的名稱
        // $path = $ServerRoot." /TGD101_team2/src/images/RoleCreate/"; 
        $path = $ServerRoot."/tgd101/g2/dist/images/RoleCreate/";     
        if (!is_dir($path)){ //判斷目錄是否存在 不存在就建立 並賦予777許可權
            mkdir($path,0777,true);
        }
        //拼成完整路徑
        $imageSrc = $path.$imageName;  

        $imageSrcforSQL = './images/RoleCreate/'.$imageName;

        //寫入檔案，並回傳結果
        $r = file_put_contents($imageSrc, $data);
               
        //建立SQL語法
        $sql = "UPDATE MEMBER set AVATAR = :AVATAR where EMIL = :acc;";
        $statement = $pdo->prepare($sql);
        $statement->bindParam(":AVATAR", $imageSrcforSQL);
        $statement ->bindValue(':acc',$acc);
        // 判斷會員
        // $statement->bindParam(":MEMBER", $imageSrcforSQL);

        $statement->execute();

?>