<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ... (your existing code for form data collection)
        // Collect form data
    $subject = $_POST["subject"];
    $redirect = $_POST["redirect"];
    $access_key = $_POST["access_key"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
     $message = $_POST["message"];
    
    // // isset
    // if(isset($_POST['age']) ){
    //     $email_body .= "\nAge"
    // }

    // Create email body
    $email_body = "Name: $name\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Email: $email\n";
    $email_body. = isset($_POST['age']) ? "\nAge : ".$_POST['age']. "\n" :""
    $email_body. = isset($_POST['insurance-cover']) ? "\nInsurance Cover : ".$_POST['insurance-cover']. "\n" :""
    $email_body. = isset($_POST['destination-of-travel']) ? "\nDestination of Travel : ".$_POST['destination-of-travel']. "\n" :""
    $email_body. = isset($_POST['duration-of-travel']) ? "\nDuration of Travel : ".$_POST['duration-of-travel']. "\n" :""
    $email_body. = isset($_POST['limit-of-cover']) ? "\nLimit of Cover : ".$_POST['limit-of-cover']. "\n" :""

    $email_body .= "Message:\ $message"

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'mail.splendidmedia.co.ke';  // Specify your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'vmax@splendidmedia.co.ke'; // SMTP username
        $mail->Password   = 'T(a[RpH^NG*H';   // SMTP password
        $mail->SMTPSecure = 'tls';  // Enable TLS encryption; `ssl` also accepted
        $mail->Port       = 587;    // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('mweroabdalla@gmail.com'); // Add a recipient

        //Content
        $mail->isHTML(false);
        $mail->Subject = "$subject ($name) ";
        $mail->Body    = $email_body;

        $mail->send();
        // Redirect to success page
        
        $mail->SMTPDebug = 2; // 2 for debugging output
        $mail->Debugoutput = function($str, $level) {
    echo "DEBUG: $str<br>";
    
};
    
        header("Location: $redirect");
        exit;
    } catch (Exception $e) {
        // Handle email sending failure (You might want to log this)
        // var_dump($e);
        echo "Failed to send email. Please try again.";
    }
}
?>


