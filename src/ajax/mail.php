<?php
    $emailAddress = $_POST['emailAddress'];
    $kindOfProperty = $_POST['kindOfProperty'];
    $lengthOfStay = $_POST['lengthOfStay'];
    $homeConditionRate = $_POST['homeConditionRate'];
    $neighborhoodRate = $_POST['neighborhoodRate'];
    $streetAddress = $_POST['streetAddress'];
    $location = $_POST['location'];
    $unitNumber = $_POST['unitNumber'];
    $sell = $_POST['sell'];
    $name = $_POST['name'];
    $mobileNumber = $_POST['mobileNumber'];

    $subject = "=?utf-8?B?" . base64_encode("Step Fill Result") . "?=";
    $message = "What’s the Real Value of My Home?: " . $emailAddress . "\n\n
                What kind of property do you own?: " . $kindOfProperty . "\n\n
                How long have you lived in your property?: " . $lengthOfStay . "\n\n
                How would you rate the condition of your home?: " . $homeConditionRate . "\n\n
                How would you rate your neighborhood?: " . $neighborhoodRate . "\n\n
                Street Address: " . $streetAddress . "\n\n
                Location: " . $location . "\n\n
                Unit number: " . $unitNumber . "\n\n
                What’s the Real Value of My Home?: " . $sell . "\n\n
                Name: " . $name . "\n\n
                Mobile Number: " . $mobileNumber . "\n\n";
    $headers = "From: $emailAddress\r\nReply-to: $emailAddress\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("melnyk.cto.numo@gmail.com", $subject, $message, $headers);
    echo $success;