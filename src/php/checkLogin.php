<?php 
    session_start();

    if(isset($_SESSION['UserID'])){
        echo json_encode("code" => [200]);
        exit();
    }else{
        echo json_encode("code" => [300]);
        exit();
    }
?>