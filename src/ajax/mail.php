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
    $message = "\n\nWhat’s the Real Value of My Home?: " . $emailAddress . "\n\n
                \n\nWhat kind of property do you own?: " . $kindOfProperty . "\n\n
                \n\nHow long have you lived in your property?: " . $lengthOfStay . "\n\n
                \n\nHow would you rate the condition of your home?: " . $homeConditionRate . "\n\n
                \n\nHow would you rate your neighborhood?: " . $neighborhoodRate . "\n\n
                \n\nStreet Address: " . $streetAddress . "\n\n
                \n\nUnit number: " . $unitNumber . "\n\n
                \n\nWhat’s the Real Value of My Home?: " . $sell . "\n\n
                \n\nName: " . $name . "\n\n
                \n\nMobile Number: " . $mobileNumber . "\n\n";
    $headers = "From: $emailAddress\r\nReply-to: $emailAddress\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("melnyk.cto.numo@gmail.com", $subject, $message, $headers);
    echo $success;