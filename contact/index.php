<?php

$array = $_POST['myArray'];
$email = $array[0];	
$message = $array[1];
$human = $array[2];
$headers = "From: terrychen@terry-c.com";
$to = "gn02090867@hotmail.com, l77chen@uwaterloo.ca"; 
$subject = 'You have web request';
$body = "From: $email
Message: $message";

mail ($to, $subject, $body, $headers);




/*if ($human == "2") {

	
    $email = $_POST['email'];
    $message = $_POST['message'];
	$from = 'Personal Web Site Request'; 
    $to = 'gn02090867@hotmail.com'; 
    $subject = 'You have web request';
	$body = "From: $email
Message: $message";

	if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}
else if ($human != '2') {
    echo '<p>You answered the anti-spam question incorrectly!</p>';
}
*/
	
?>
