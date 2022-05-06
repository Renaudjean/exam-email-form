<?php
   ini_set('SMTP','smtp.google.com');
   ini_set("smpt_port", 587);
   $email_from =  $_POST['email'];
   $email_subject =  $_POST['title'];
   $email_message = $_POST['message'];

   // Configure JSON response
   if(!filter_var($email_from, FILTER_VALIDATE_EMAIL)){  //check if the mail format is valid or not
      echo 'Email Format not valid';
   }else{
      $subject = $email_subject; 
      $email_to = "renaud06goubelle@gmail.com";

      //Add email of user
      $headers = 'From:'.$email_from . "\r\n";   

      $message = "From: ".$email_from." \n".$email_message;
      // $headers .= "Content-type: text/html\r\n";

      $emailSend = mail ($email_to, $subject, $message, $headers);  //send the email with all the parameters we need
         
      if( $emailSend == true ) {          //if the email send ot not we send a message 
         echo "Message sent successfully...";
      }else {
         echo "Message could not be sent..........";
      }
       
   }
  

  
 
?>