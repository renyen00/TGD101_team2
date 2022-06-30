<?php
    include("Connection_server.php");

    //---------------------------------------------------

    // session_start();
    // //如果沒有登入Session值 或是 Session值為空

    // if(!isset($_SESSION[“loginMember"]) || ($_SESSION[“loginMember"]=="")){

    // //前往登入頁面
    
    // header(“Location: login.php");
    
    // }else{
    
    // //若使用者已經是登入狀態擁有SESSION值，則前往以下網頁
    
     
    
    // header(“Location: index.html");
    
    // }

    //判斷是否上傳成功
    if($_FILES["profile"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["profile"]["error"];
    }else{
        //取得上傳的檔案資訊=======================================
        $fileName = $_FILES["profile"]["name"];    //檔案名稱含副檔名        
        $filePath_Temp = $_FILES["profile"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
        $fileType = $_FILES["profile"]["type"];    //檔案種類        
        $fileSize = $_FILES["profile"]["size"];    //檔案尺寸
        //=======================================================

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        
        //檔案最終存放位置
        $filePath = $ServerRoot."/RoleCreate/".$fileName;
  
        //將暫存檔搬移到正確位置
        move_uploaded_file($filePath_Temp, $filePath);
    }

    print_r($_FILES["profile"]);

    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }

    //建立SQL語法
    $sql = "INSERT INTO TGD101team2.MEMBER(AVATAR) VALUES ($filePath)";

?>