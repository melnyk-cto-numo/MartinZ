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
    $message = "What’s the Real Value of My Home?: " . $emailAddress . "\r\n
                What kind of property do you own?: " . $kindOfProperty . "\r\n
                How long have you lived in your property?: " . $lengthOfStay . "\r\n
                How would you rate the condition of your home?: " . $homeConditionRate . "\r\n
                How would you rate your neighborhood?: " . $neighborhoodRate . "\r\n
                Street Address: " . $streetAddress . "\r\n
                Unit number: " . $unitNumber . "\r\n
                What’s the Real Value of My Home?: " . $sell . "\r\n
                Name: " . $name . "\r\n
                Mobile Number: " . $mobileNumber . "\r\n";
    $headers = "From: $emailAddress\r\nReply-to: $emailAddress\r\nContent-Type: text/plain; charset=utf-8\r\n";

    $success = mail("melnyk.cto.numo@gmail.com", $subject, $message, $headers);
    echo $success;