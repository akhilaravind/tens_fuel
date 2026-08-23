<?php
    $to = 'info@tensfuel.com';
    $firstname = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email= $_POST["email"];
    $message= $_POST["message"];
    $subject= $_POST["subject"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$firstname.'  '.$lastName.'</td>
        </tr>
        <tr><td>Email From: '.$email.'</td></tr>
        <tr><td>Subject: '.$subject.'</td></tr>
        <tr><td>Message: '.$message.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>