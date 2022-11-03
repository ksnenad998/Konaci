<?php
include "../class.user.php";
$user_class = new USER();



    ///if (isset($_REQUEST['recaptcha_response'])) {

        // Build POST request:
        ///$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
        ///$recaptcha_secret = '6LcA-KoaAAAAAO90EfGBnbOFvRyxtcgkFmFmzjrs';
        ///$recaptcha_response = $_POST['recaptcha_response'];

        // Make and decode POST request:
        ///$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
        // echo $recaptcha;
        ///$recaptcha = json_decode($recaptcha);


        // Take action based on the score returned:
        ///if ($recaptcha->score >= 0.5) {
            if (isset($_REQUEST['name']) && isset($_REQUEST['phone']) && isset($_REQUEST['email'])) {

                $email_to = "info@resivoje.com";
                $email_subject = "Rezervacija";


                $name       = $_POST['name'];
                $phone      = $_POST['phone'];
                $email    = $_POST['email'];
                $payment   = $_POST['payment'];
                $room = $_POST['room'];

                function clean_string($string)
                {
                    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
                    return str_replace($bad, "", $string);
                }

                $email_message = "Ime: " . clean_string($name) . "\n";
                $email_message .= "Telefon: " . clean_string($phone) . "\n";
                $email_message .= "Email: " . clean_string($email) . "\n";
                $email_message .= "Nacin placanja" . clean_string($payment). "\n";
                $email_message .= "Soba" . clean_string($room). "\n";

                $headers = 'From: ' . $email . "\r\n" .
                    'Reply-To: ' . $email . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
                if (@mail($email_to, $email_subject, $email_message, $headers)) {
                    $user_class->returnJSON("OK","Rezervacija uspešna.");
                    return;
                } else {
                     $user_class->returnJSON("ERROR","Rezervacija nije uspela. Molimo pokušajte ponovo.");
                    return;
                };
            } else {
                //echo "nije sve setovanoi";
                $user_class->returnJSON("ERROR","Popunite sva polja.");
                return;
            }
        ///} else {
            // echo "error with recaptcha";
            /// $user_class->returnJSON("ERROR",
            ///  "Problem with recaptcha");
            ///return;
        ///}
    ///} else {
        //echo "error with recaptcha_response";
         ///$user_class->returnJSON("ERROR",
         ///"Problem with recaptcha_response");
        ///return;
    ///}


?>
