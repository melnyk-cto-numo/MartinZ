<?php
    $emailAddress = $_POST['emailAddress'];
    $kindOfProperty = $_POST['kindOfProperty'];
    $lengthOfStay = $_POST['lengthOfStay'];
    $homeConditionRate = $_POST['homeConditionRate'];
    $neighborhoodRate = $_POST['neighborhoodRate'];
    $streetAddress = $_POST['streetAddress'];
    $unitNumber = $_POST['unitNumber'];
    $sell = $_POST['sell'];
    $name = $_POST['name'];
    $mobileNumber = $_POST['mobileNumber'];

    $subject = "=?utf-8?B?" . base64_encode("Step Fill Result") . "?=";
    $message = "\r\nWhat’s the Real Value of My Home?: " . $emailAddress . "\r\n
                \r\nWhat kind of property do you own?: " . $kindOfProperty . "\r\n
                \r\nHow long have you lived in your property?: " . $lengthOfStay . "\r\n
                \r\nHow would you rate the condition of your home?: " . $homeConditionRate . "\r\n
                \r\nHow would you rate your neighborhood?: " . $neighborhoodRate . "\r\n
                \r\nStreet Address: " . $streetAddress . "\r\n
                \r\nUnit number: " . $unitNumber . "\r\n
                \r\nWhat’s the Real Value of My Home?: " . $sell . "\r\n
                \r\nName: " . $name . "\r\n
                \r\nMobile Number: " . $mobileNumber . "\r\n";
    $headers = "From: $emailAddress\r\nReply-to: $emailAddress\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("melnyk.cto.numo@gmail.com", $subject, $message, $headers);
    echo $success;