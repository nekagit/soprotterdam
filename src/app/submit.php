<?php

    if(isset($_POST['email'])&& $_POST['email'] != ''){

        if(filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL)){
            
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $message = $_POST['message'];

            $to = "nenad99@hotmail.de";
            $body = "";
            $body .= "From: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$message. "\r\n";

            mail($to,$messageSubject,$body);

            
        }
    }
?>