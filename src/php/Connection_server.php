<?php

       //MySQL相關資訊
       $db_host = "tgd101team2.cjggucdsi6pa.us-east-1.rds.amazonaws.com";
       $db_user = "tsung";
       $db_pass = "tgd1010000";
       $db_select = "TGD101team2";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

?>