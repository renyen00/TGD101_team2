<?php 
    session_start();

    if(isset($_SESSION['UserE'])){
        $info = array(
            'email' => $_SESSION['UserE'],
            'name'=>$_SESSION['UserN'],
            'nickname'=>$_SESSION['UserNN'],
            'avatar'=>$_SESSION['UserNB'],
            'id' => $_SESSION['UserUID'],
            'link'=> './php/logout.php',
            'logst'=>'登出'
        );
        echo json_encode($info);
    }else{
        $info = array(
            'name'=>'訪客',
            'nickname'=>'訪客',
            'avatar'=>'./images/emojione-v1_bird.png',
            'link'=> './login.html',
            'logst'=>'登入'
        );
        echo json_encode($info);
    }
