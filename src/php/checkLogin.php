<?php 
    session_start();

    if(isset($_SESSION['UserID'])){
        $info = array(
            'name'=>$_SESSION['UserN'],
            'nickname'=>$_SESSION['UserNN'],
            'avatar'=>$_SESSION['UserNB'],
            'logst'=>'登出'
        );
        echo json_encode($info);
    }else{
        
        $info = array(
            'name'=>'訪客',
            'nickname'=>'訪客',
            'avatar'=>'https://64.media.tumblr.com/1211ea0ba66ee3c410d1b693b445c934/b7baa446c426e5a8-56/s400x600/f567477acdbdc90540f4561088e7a2c8d4b995fd.pnj',
            'logst'=>'登入'
        );
        echo json_encode($info);
    }
