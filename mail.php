<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load Composer dependencies

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $dob = htmlspecialchars($_POST['dob']);
    $phone_no = htmlspecialchars($_POST['phone_no']);
    $address = htmlspecialchars($_POST['address']);
    $license = htmlspecialchars($_POST['License']);
    $references = htmlspecialchars($_POST['references']);
    $experience = htmlspecialchars($_POST['experience']);

    // Email content
    $message = "
    <html>
    <body>
        <h2>Form Submission Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>DOB:</strong> $dob</p>
        <p><strong>Phone No:</strong> $phone_no</p>
        <p><strong>Address:</strong> $address</p>
        <p><strong>License #:</strong> $license</p>
        <p><strong>References:</strong> $references</p>
        <p><strong>Experience:</strong></p>
        <p>$experience</p>
    </body>
    </html>
    ";

    // PHPMailer setup
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'pdfestimator@gmail.com'; // Your Gmail address
        $mail->Password = 'guodylxjfwcvzslq'; // App-specific password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email headers
        $mail->setFrom('pdfestimator@gmail.com', 'PDF Estimator');
        $mail->addAddress('anmirza37@gmail.com', 'Recipient Name'); // Correct recipient email
        $mail->isHTML(true);
        $mail->Subject = "New Form Submission";
        $mail->Body = $message;

        // Send email
        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Email could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>