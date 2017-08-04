<?php

$webmaster_email = "ily.lauren119@example.com";


$feedback_page = "feedback_form.html";
$error_page = "error_message.html";
$thankyou_page = "thank_you.html";


$comments = $_REQUEST['comments'] ;


if (empty($comments)) {
header( "Location: $error_page" );
}

// If we passed all previous tests, send the email then redirect to the thank you page.
else {
mail( "$webmaster_email", "Feedback Form Results",
  $comments, "From: $email_address" );
header( "Location: $thankyou_page" );
}
?>
