<?php 
    session_start();

    if(isset($_SESSION['UserID'])){
        echo json_encode("code" => [200]);
        echo $_SESSION['UserN'];
        echo " / ";
        echo $_SESSION['UserNN'];
        echo " / ";
        echo  $_SESSION['UserNB'];
        echo "<br>";       
        exit();
    }else{
        echo json_encode("code" => [300]);
        exit();
    }
?>