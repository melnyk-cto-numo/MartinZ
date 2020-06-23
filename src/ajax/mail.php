<?php
    $email = $_POST['email'];

    $subject = "=?utf-8?B?" . base64_encode("Step Fill Result") . "?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("melnyk.cto.numo@gmail.com", $subject, $email, $headers);
    echo $success;